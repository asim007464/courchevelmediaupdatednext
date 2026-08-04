"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { getImageSrc } from "@/lib/getImageSrc";
import {
  defaultGalleryCollections,
  EXCLUDED_ALT,
  isExclusionRow,
} from "@/Data/galleryDefaults";

const emptyForm = {
  category: "ski",
  alt: "",
  sort_order: 0,
};

export default function GalleryAdmin() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [existingUrl, setExistingUrl] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadImages = async () => {
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      setRows([]);
      setLoading(false);
      return;
    }

    const { data, error: loadError } = await supabase
      .from("gallery_images")
      .select("*")
      .order("category")
      .order("sort_order");

    if (loadError) {
      setError(
        loadError.message.includes("schema cache") ||
          loadError.message.includes("does not exist")
          ? "Gallery table missing. Run supabase/schema.sql in the Supabase SQL Editor."
          : loadError.message
      );
      setRows([]);
    } else {
      setRows(data || []);
      setError("");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const displayImages = useMemo(() => {
    const excluded = new Set(
      rows.filter(isExclusionRow).map((row) => row.image_url)
    );
    const uploads = rows
      .filter((row) => !isExclusionRow(row))
      .map((image) => ({
        ...image,
        source: "upload",
        preview: image.image_url,
      }));

    const builtins = [
      ...defaultGalleryCollections.ski,
      ...defaultGalleryCollections.events,
    ]
      .filter((item) => !excluded.has(item.key))
      .map((item) => ({
        id: item.id,
        key: item.key,
        category: item.category,
        alt: item.alt,
        sort_order: item.sort_order,
        source: "builtin",
        preview: getImageSrc(item.src),
        image_url: item.key,
      }));

    const all = [...builtins, ...uploads];
    if (filterCategory === "all") return all;
    return all.filter((image) => image.category === filterCategory);
  }, [rows, filterCategory]);

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFile(null);
    setExistingUrl("");
  };

  const startEdit = (image) => {
    if (image.source === "builtin") {
      setMessage(
        "Built-in site images can be deleted from the slider. Upload a new image to add replacements."
      );
      return;
    }
    setEditingId(image.id);
    setForm({
      category: image.category,
      alt: image.alt || "",
      sort_order: image.sort_order ?? 0,
    });
    setExistingUrl(image.image_url);
    setFile(null);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const uploadFile = async (supabase, category, imageFile) => {
    const extension = imageFile.name.split(".").pop() || "jpg";
    const path = `${category}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(path, imageFile, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("gallery").getPublicUrl(path);

    return publicUrl;
  };

  const removeStorageFile = async (supabase, imageUrl) => {
    try {
      const marker = "/storage/v1/object/public/gallery/";
      if (!imageUrl?.includes(marker)) return;
      const storagePath = imageUrl.split(marker)[1];
      if (storagePath) {
        await supabase.storage.from("gallery").remove([storagePath]);
      }
    } catch {
      // Ignore storage cleanup failures.
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured.");
      return;
    }

    if (!editingId && !file) {
      setError("Choose an image to upload.");
      return;
    }

    const supabase = createClient();
    setSaving(true);

    try {
      let imageUrl = existingUrl;

      if (file) {
        imageUrl = await uploadFile(supabase, form.category, file);
        if (editingId && existingUrl) {
          await removeStorageFile(supabase, existingUrl);
        }
      }

      const payload = {
        category: form.category,
        alt: form.alt.trim() || `${form.category} portfolio image`,
        sort_order:
          Number(form.sort_order) ||
          rows.filter(
            (image) =>
              image.category === form.category && !isExclusionRow(image)
          ).length + 1,
        image_url: imageUrl,
      };

      const query = editingId
        ? supabase.from("gallery_images").update(payload).eq("id", editingId)
        : supabase.from("gallery_images").insert(payload);

      const { error: saveError } = await query;
      if (saveError) throw new Error(saveError.message);

      setMessage(editingId ? "Gallery image updated." : "Gallery image added.");
      resetForm();
      event.target.reset?.();
      loadImages();
    } catch (saveError) {
      setError(saveError.message || "Could not save image.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (image) => {
    if (!window.confirm("Remove this image from the website slider?")) return;
    const supabase = createClient();

    if (image.source === "builtin") {
      const { error: excludeError } = await supabase.from("gallery_images").insert({
        category: image.category,
        image_url: image.key,
        alt: EXCLUDED_ALT,
        sort_order: -1,
      });

      if (excludeError) {
        setError(excludeError.message);
        return;
      }

      setMessage("Built-in image removed from the slider.");
      loadImages();
      return;
    }

    const { error: deleteError } = await supabase
      .from("gallery_images")
      .delete()
      .eq("id", image.id);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    await removeStorageFile(supabase, image.image_url);
    setMessage("Gallery image deleted.");
    if (editingId === image.id) resetForm();
    loadImages();
  };

  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Sliding gallery</h1>
        <p>
          Site slider images are listed below. Delete any of them, or upload new
          ones to add to Ski / Events.
        </p>
      </header>

      {error ? <p className="admin-banner admin-banner--error">{error}</p> : null}
      {message ? <p className="admin-banner">{message}</p> : null}

      <form className="admin-form" onSubmit={handleSave}>
        <h2 className="admin-form__title">
          {editingId ? "Update uploaded image" : "Add gallery image"}
        </h2>
        <div className="admin-form__row">
          <label>
            <span>Category</span>
            <select
              value={form.category}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, category: event.target.value }))
              }
            >
              <option value="ski">Ski Holidays</option>
              <option value="events">Private Events</option>
            </select>
          </label>
          <label>
            <span>Sort order</span>
            <input
              type="number"
              value={form.sort_order}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  sort_order: event.target.value,
                }))
              }
            />
          </label>
        </div>
        <label>
          <span>Alt text</span>
          <input
            value={form.alt}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, alt: event.target.value }))
            }
            placeholder="Short description of the photo"
          />
        </label>
        <label>
          <span>
            {editingId ? "Replace image (optional)" : "Image file"}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
            required={!editingId}
          />
        </label>
        {existingUrl ? (
          <img src={existingUrl} alt="" className="admin-form__preview" />
        ) : null}
        <div className="admin-form__actions">
          <button type="submit" disabled={saving}>
            {saving
              ? "Saving..."
              : editingId
                ? "Save changes"
                : "Add image"}
          </button>
          {editingId ? (
            <button type="button" className="is-ghost" onClick={resetForm}>
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="admin-filter">
        <button
          type="button"
          className={filterCategory === "all" ? "is-active" : ""}
          onClick={() => setFilterCategory("all")}
        >
          All
        </button>
        <button
          type="button"
          className={filterCategory === "ski" ? "is-active" : ""}
          onClick={() => setFilterCategory("ski")}
        >
          Ski
        </button>
        <button
          type="button"
          className={filterCategory === "events" ? "is-active" : ""}
          onClick={() => setFilterCategory("events")}
        >
          Events
        </button>
      </div>

      {loading ? (
        <p>Loading gallery...</p>
      ) : displayImages.length === 0 ? (
        <p className="admin-banner">
          No gallery images left. Upload new ones above to rebuild the slider.
        </p>
      ) : (
        <div className="admin-gallery-grid">
          {displayImages.map((image) => (
            <article key={image.id} className="admin-gallery-card">
              <img src={image.preview} alt={image.alt || ""} />
              <div>
                <strong>
                  {image.category}
                  {image.source === "builtin" ? " · site" : " · uploaded"}
                </strong>
                <p>{image.alt || "No description"}</p>
                <p className="admin-gallery-card__meta">
                  Order {image.sort_order}
                </p>
                <div className="admin-gallery-card__actions">
                  {image.source === "upload" ? (
                    <button type="button" onClick={() => startEdit(image)}>
                      Edit
                    </button>
                  ) : null}
                  <button type="button" onClick={() => handleDelete(image)}>
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
