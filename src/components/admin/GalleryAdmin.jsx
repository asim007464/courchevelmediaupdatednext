"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { getImageSrc } from "@/lib/getImageSrc";
import {
  defaultGalleryCollections,
  EXCLUDED_ALT,
  isExclusionRow,
} from "@/Data/galleryDefaults";

const POSITION_OPTIONS = [
  { value: "center", label: "Center" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
  { value: "left", label: "Left" },
  { value: "right", label: "Right" },
  { value: "top left", label: "Top left" },
  { value: "top right", label: "Top right" },
  { value: "bottom left", label: "Bottom left" },
  { value: "bottom right", label: "Bottom right" },
];

const LAYOUT_OPTIONS = [
  { value: "auto", label: "Auto (old mixed layout)" },
  { value: "portrait", label: "Portrait (2 rows tall)" },
  { value: "landscape", label: "Landscape (2 columns wide)" },
  { value: "square", label: "Square (1 cell)" },
];

function isSiteKey(url) {
  return String(url || "").startsWith("selected://");
}

function normalizeLayoutSize(value, fallback = "auto") {
  const size = String(value ?? fallback).toLowerCase().trim();
  if (size === "portrait" || size === "landscape" || size === "square") {
    return size;
  }
  return "auto";
}

function layoutLabel(layoutSize) {
  if (layoutSize === "landscape") return "Landscape";
  if (layoutSize === "square") return "Square";
  if (layoutSize === "portrait") return "Portrait";
  return "Auto";
}

export default function GalleryAdmin() {
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyKey, setBusyKey] = useState("");
  const [editing, setEditing] = useState(null);

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
          : loadError.message.includes("object_position") ||
              loadError.message.includes("layout_size")
            ? "Add missing columns: run the latest supabase/schema.sql in Supabase (object_position + layout_size)."
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

  const overrideByKey = useMemo(() => {
    const map = new Map();
    rows.forEach((row) => {
      if (!isExclusionRow(row) && isSiteKey(row.image_url)) {
        map.set(row.image_url, row);
      }
    });
    return map;
  }, [rows]);

  const buildCategoryList = (category) => {
    const excluded = new Set(
      rows.filter(isExclusionRow).map((row) => row.image_url)
    );
    return (defaultGalleryCollections[category] || [])
      .filter((item) => !excluded.has(item.key))
      .map((item) => {
        const override = overrideByKey.get(item.key);
        return {
          key: item.key,
          category: item.category,
          alt: override?.alt || item.alt,
          sort_order: Number(override?.sort_order ?? item.sort_order) || 0,
          object_position: override?.object_position || "center",
          layout_size: normalizeLayoutSize(override?.layout_size, "auto"),
          preview: getImageSrc(item.src),
          overrideId: override?.id || null,
        };
      })
      .sort((a, b) => a.sort_order - b.sort_order);
  };

  const skiImages = useMemo(() => buildCategoryList("ski"), [rows, overrideByKey]);
  const eventImages = useMemo(
    () => buildCategoryList("events"),
    [rows, overrideByKey]
  );

  const upsertSiteImage = async (supabase, image, patch) => {
    const payload = {
      category: image.category,
      image_url: image.key,
      alt: patch.alt ?? image.alt ?? "",
      sort_order: Number(patch.sort_order ?? image.sort_order) || 0,
      object_position: patch.object_position || image.object_position || "center",
      layout_size: normalizeLayoutSize(
        patch.layout_size ?? image.layout_size,
        "auto"
      ),
    };

    if (image.overrideId) {
      const { error: updateError } = await supabase
        .from("gallery_images")
        .update(payload)
        .eq("id", image.overrideId);
      if (updateError) throw new Error(updateError.message);
      return;
    }

    const { error: insertError } = await supabase
      .from("gallery_images")
      .insert(payload);
    if (insertError) throw new Error(insertError.message);
  };

  const moveImage = async (category, index, direction) => {
    const list = category === "ski" ? skiImages : eventImages;
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= list.length) return;

    const current = list[index];
    const swapWith = list[targetIndex];
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }

    setBusyKey(current.key);
    setMessage("");
    setError("");

    try {
      await upsertSiteImage(supabase, current, { sort_order: swapWith.sort_order });
      await upsertSiteImage(supabase, swapWith, { sort_order: current.sort_order });
      setMessage(
        `${category === "ski" ? "Ski" : "Events"} order updated.`
      );
      await loadImages();
    } catch (moveError) {
      setError(moveError.message || "Could not update order.");
    } finally {
      setBusyKey("");
    }
  };

  const setLayoutSize = async (image, layoutSize) => {
    const next = normalizeLayoutSize(layoutSize);
    if (next === image.layout_size) return;

    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }

    setBusyKey(image.key);
    setMessage("");
    setError("");

    try {
      await upsertSiteImage(supabase, image, { layout_size: next });
      setMessage(
        next === "portrait"
          ? "Set to portrait (2 rows tall)."
          : next === "landscape"
            ? "Set to landscape (2 columns wide)."
            : next === "square"
              ? "Set to square (1 cell)."
              : "Set to auto (old mixed layout)."
      );
      if (editing?.key === image.key) {
        setEditing((prev) => (prev ? { ...prev, layout_size: next } : prev));
      }
      await loadImages();
    } catch (layoutError) {
      setError(layoutError.message || "Could not update layout size.");
    } finally {
      setBusyKey("");
    }
  };

  const saveEdit = async (event) => {
    event.preventDefault();
    if (!editing) return;
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }

    setBusyKey(editing.key);
    setMessage("");
    setError("");

    try {
      await upsertSiteImage(supabase, editing, {
        alt: editing.alt,
        sort_order: editing.sort_order,
        object_position: editing.object_position,
        layout_size: editing.layout_size,
      });
      setMessage("Image settings saved.");
      setEditing(null);
      await loadImages();
    } catch (saveError) {
      setError(saveError.message || "Could not save image.");
    } finally {
      setBusyKey("");
    }
  };

  const hideImage = async (image) => {
    if (!window.confirm("Hide this image from the website slider?")) return;
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }

    setBusyKey(image.key);
    setError("");
    setMessage("");

    try {
      if (image.overrideId) {
        await supabase.from("gallery_images").delete().eq("id", image.overrideId);
      }
      const { error: excludeError } = await supabase.from("gallery_images").insert({
        category: image.category,
        image_url: image.key,
        alt: EXCLUDED_ALT,
        sort_order: -1,
        object_position: "center",
        layout_size: "auto",
      });
      if (excludeError) throw new Error(excludeError.message);
      setMessage("Image hidden from the slider.");
      if (editing?.key === image.key) setEditing(null);
      await loadImages();
    } catch (hideError) {
      setError(hideError.message || "Could not hide image.");
    } finally {
      setBusyKey("");
    }
  };

  const renderSection = (title, category, images) => (
    <section className="admin-gallery-section">
      <div className="admin-gallery-section__head">
        <h2>{title}</h2>
        <p>
          {images.length} images · arrows reorder · Auto restores the old mixed
          layout · Portrait = 2 rows · Landscape = 2 columns · Square = 1 cell
        </p>
      </div>

      {images.length === 0 ? (
        <p className="admin-banner">No images in this section.</p>
      ) : (
        <div className="admin-gallery-order-list">
          {images.map((image, index) => (
            <article key={image.key} className="admin-gallery-order-card">
              <span className="admin-gallery-order-card__index">{index + 1}</span>
              <img
                src={image.preview}
                alt={image.alt || ""}
                style={{ objectPosition: image.object_position || "center" }}
              />
              <div className="admin-gallery-order-card__body">
                <p>{image.alt || "No description"}</p>
                <p className="admin-gallery-card__meta">
                  Order {image.sort_order} · Focus {image.object_position} ·{" "}
                  {layoutLabel(image.layout_size)}
                </p>
                <label className="admin-gallery-layout">
                  <span>Size</span>
                  <select
                    value={image.layout_size}
                    disabled={busyKey === image.key}
                    onChange={(event) =>
                      setLayoutSize(image, event.target.value)
                    }
                  >
                    {LAYOUT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="admin-gallery-card__actions">
                  <button
                    type="button"
                    disabled={busyKey === image.key || index === 0}
                    onClick={() => moveImage(category, index, -1)}
                  >
                    ↑ Up
                  </button>
                  <button
                    type="button"
                    disabled={busyKey === image.key || index === images.length - 1}
                    onClick={() => moveImage(category, index, 1)}
                  >
                    ↓ Down
                  </button>
                  <button
                    type="button"
                    disabled={busyKey === image.key}
                    onClick={() => setEditing({ ...image })}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    disabled={busyKey === image.key}
                    onClick={() => hideImage(image)}
                  >
                    Hide
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );

  if (!isSupabaseConfigured()) {
    return (
      <div className="admin-page">
        <p className="admin-banner admin-banner--error">
          Supabase is not configured.
        </p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Selected Work order</h1>
        <p>
          Reorder Ski and Events images and set each tile to Auto (old mixed
          layout), Portrait, Landscape, or Square.
        </p>
      </header>

      {error ? <p className="admin-banner admin-banner--error">{error}</p> : null}
      {message ? <p className="admin-banner">{message}</p> : null}

      {editing ? (
        <form className="admin-form" onSubmit={saveEdit}>
          <h2 className="admin-form__title">Edit image settings</h2>
          <div className="admin-form__row">
            <label>
              <span>Sort order</span>
              <input
                type="number"
                value={editing.sort_order}
                onChange={(event) =>
                  setEditing((prev) => ({
                    ...prev,
                    sort_order: event.target.value,
                  }))
                }
              />
            </label>
            <label>
              <span>Tile size</span>
              <select
                value={editing.layout_size}
                onChange={(event) =>
                  setEditing((prev) => ({
                    ...prev,
                    layout_size: normalizeLayoutSize(event.target.value),
                  }))
                }
              >
                {LAYOUT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Image position (crop focus)</span>
              <select
                value={editing.object_position}
                onChange={(event) =>
                  setEditing((prev) => ({
                    ...prev,
                    object_position: event.target.value,
                  }))
                }
              >
                {POSITION_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            <span>Alt text</span>
            <input
              value={editing.alt}
              onChange={(event) =>
                setEditing((prev) => ({ ...prev, alt: event.target.value }))
              }
            />
          </label>
          <div className="admin-form__position-preview">
            <img
              src={editing.preview}
              alt=""
              className="admin-form__preview"
              style={{ objectPosition: editing.object_position || "center" }}
            />
          </div>
          <div className="admin-form__actions">
            <button type="submit" disabled={busyKey === editing.key}>
              {busyKey === editing.key ? "Saving..." : "Save settings"}
            </button>
            <button
              type="button"
              className="is-ghost"
              onClick={() => setEditing(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      {loading ? (
        <p>Loading gallery...</p>
      ) : (
        <>
          {renderSection("Ski Holidays", "ski", skiImages)}
          {renderSection("Private Events", "events", eventImages)}
        </>
      )}
    </div>
  );
}
