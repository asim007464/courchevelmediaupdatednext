"use client";

import { useEffect, useRef, useState } from "react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { renderBlogContentToHtml } from "@/lib/blogContent";
import { MAGAZINE_EDITORIAL_PILLARS } from "@/lib/magazine";

const emptyPost = {
  title: "",
  slug: "",
  category: "Planning Your Experience",
  lead: "",
  content: "",
  seo_title: "",
  meta_description: "",
  cover_alt: "",
  author: "Courchevel Media",
  published_at: "",
  minutes: 5,
  published: false,
};

const CATEGORIES = MAGAZINE_EDITORIAL_PILLARS;

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function toDateTimeLocal(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function fromDateTimeLocal(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

export default function BlogsAdmin() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState(emptyPost);
  const [coverFile, setCoverFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [existingCover, setExistingCover] = useState("");
  const [existingUpdatedAt, setExistingUpdatedAt] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const contentRef = useRef(null);
  const imageInputRef = useRef(null);

  const loadPosts = async () => {
    const supabase = createClient();
    if (!supabase) {
      setError("Supabase is not configured.");
      setLoading(false);
      return;
    }

    const { data, error: loadError } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (loadError) {
      setError(
        loadError.message.includes("seo_title") ||
          loadError.message.includes("meta_description") ||
          loadError.message.includes("cover_alt") ||
          loadError.message.includes("published_at") ||
          loadError.message.includes("schema cache")
          ? "Magazine SEO columns missing. Run the latest supabase/schema.sql ALTER statements for blogs in Supabase."
          : loadError.message
      );
    } else {
      setPosts(data || []);
      setError("");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyPost);
    setCoverFile(null);
    setExistingCover("");
    setExistingUpdatedAt("");
    setShowPreview(false);
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      slug: post.slug,
      category: post.category || "Planning Your Experience",
      lead: post.lead || "",
      content: post.content || "",
      seo_title: post.seo_title || "",
      meta_description: post.meta_description || "",
      cover_alt: post.cover_alt || "",
      author: post.author || "Courchevel Media",
      published_at: toDateTimeLocal(post.published_at || post.created_at),
      minutes: post.minutes || 5,
      published: Boolean(post.published),
    });
    setExistingCover(post.cover_image || "");
    setExistingUpdatedAt(post.updated_at || "");
    setCoverFile(null);
    setMessage("");
    setShowPreview(false);
  };

  const insertAtCursor = (snippet, selectPlaceholder = false) => {
    const field = contentRef.current;
    if (!field) {
      setForm((prev) => ({
        ...prev,
        content: `${prev.content}${prev.content ? "\n\n" : ""}${snippet}`,
      }));
      return;
    }

    const start = field.selectionStart ?? form.content.length;
    const end = field.selectionEnd ?? form.content.length;
    const next = `${form.content.slice(0, start)}${snippet}${form.content.slice(end)}`;
    setForm((prev) => ({ ...prev, content: next }));

    requestAnimationFrame(() => {
      field.focus();
      if (selectPlaceholder && snippet.includes("text")) {
        const placeholderStart = start + snippet.indexOf("text");
        field.setSelectionRange(placeholderStart, placeholderStart + 4);
      } else {
        const caret = start + snippet.length;
        field.setSelectionRange(caret, caret);
      }
    });
  };

  const wrapSelection = (before, after = before) => {
    const field = contentRef.current;
    if (!field) return;
    const start = field.selectionStart ?? 0;
    const end = field.selectionEnd ?? 0;
    const selected = form.content.slice(start, end) || "text";
    const snippet = `${before}${selected}${after}`;
    const next = `${form.content.slice(0, start)}${snippet}${form.content.slice(end)}`;
    setForm((prev) => ({ ...prev, content: next }));
    requestAnimationFrame(() => {
      field.focus();
      field.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  };

  const uploadContentImage = async (file) => {
    if (!file) return;
    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured.");
      return;
    }

    const supabase = createClient();
    setUploadingImage(true);
    setError("");

    const extension = file.name.split(".").pop() || "jpg";
    const path = `content/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${extension}`;

    const { error: uploadError } = await supabase.storage
      .from("blogs")
      .upload(path, file, { cacheControl: "3600", upsert: false });

    setUploadingImage(false);

    if (uploadError) {
      setError(uploadError.message);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("blogs").getPublicUrl(path);

    const alt =
      window.prompt(
        "Alt text for this image (SEO / accessibility):",
        file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ")
      ) || "Article image";

    insertAtCursor(`\n\n![${alt}](${publicUrl})\n\n`);
    setMessage("Image uploaded into content.");
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!isSupabaseConfigured()) {
      setError("Supabase is not configured.");
      return;
    }

    const supabase = createClient();
    setSaving(true);

    let coverImage = existingCover || null;

    if (coverFile) {
      const extension = coverFile.name.split(".").pop() || "jpg";
      const path = `covers/${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}.${extension}`;
      const { error: uploadError } = await supabase.storage
        .from("blogs")
        .upload(path, coverFile, { cacheControl: "3600", upsert: false });

      if (uploadError) {
        setSaving(false);
        setError(uploadError.message);
        return;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("blogs").getPublicUrl(path);
      coverImage = publicUrl;
    }

    const slug = form.slug.trim() || slugify(form.title);
    const isPublished = Boolean(form.published);
    let publishedAt = fromDateTimeLocal(form.published_at);
    if (isPublished && !publishedAt) {
      publishedAt = new Date().toISOString();
    }

    const payload = {
      title: form.title.trim(),
      slug,
      category: form.category.trim() || "Planning Your Experience",
      lead: form.lead.trim(),
      content: form.content.trim(),
      seo_title: form.seo_title.trim(),
      meta_description: form.meta_description.trim(),
      cover_alt: form.cover_alt.trim(),
      author: form.author.trim() || "Courchevel Media",
      minutes: Number(form.minutes) || 5,
      published: isPublished,
      published_at: isPublished ? publishedAt : publishedAt,
      cover_image: coverImage,
    };

    const query = editingId
      ? supabase.from("blogs").update(payload).eq("id", editingId)
      : supabase.from("blogs").insert(payload);

    const { error: saveError } = await query;
    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setMessage(editingId ? "Blog updated." : "Blog created.");
    resetForm();
    loadPosts();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    const supabase = createClient();
    const { error: deleteError } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);
    if (deleteError) {
      setError(deleteError.message);
      return;
    }
    setMessage("Blog deleted.");
    if (editingId === id) resetForm();
    loadPosts();
  };

  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Magazine articles</h1>
        <p>
          Create Magazine posts with separate H1, SEO title, meta description,
          slug, hero image + alt, author, and publish dates for search and
          social sharing.
        </p>
      </header>

      {error ? <p className="admin-banner admin-banner--error">{error}</p> : null}
      {message ? <p className="admin-banner">{message}</p> : null}

      <form className="admin-form" onSubmit={handleSave}>
        <label>
          <span>Article title (H1)</span>
          <input
            value={form.title}
            onChange={(event) => {
              const title = event.target.value;
              setForm((prev) => ({
                ...prev,
                title,
                slug: editingId ? prev.slug : slugify(title),
              }));
            }}
            placeholder="Why overcast days often make better photographs"
            required
          />
        </label>

        <label>
          <span>SEO title (browser tab / Google / OG title)</span>
          <input
            value={form.seo_title}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, seo_title: event.target.value }))
            }
            placeholder="Leave blank to use the article title"
            maxLength={70}
          />
        </label>

        <label>
          <span>Meta description (search + OG description)</span>
          <textarea
            rows={2}
            value={form.meta_description}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                meta_description: event.target.value,
              }))
            }
            placeholder="1–2 sentences for search results and social sharing"
            maxLength={180}
          />
        </label>

        <div className="admin-form__row">
          <label>
            <span>Custom URL slug</span>
            <input
              value={form.slug}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, slug: event.target.value }))
              }
              placeholder="why-overcast-days"
              required
            />
          </label>
          <label>
            <span>Category</span>
            <select
              value={form.category}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, category: event.target.value }))
              }
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Minutes</span>
            <input
              type="number"
              min="1"
              value={form.minutes}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, minutes: event.target.value }))
              }
            />
          </label>
        </div>

        <div className="admin-form__row">
          <label>
            <span>Author</span>
            <input
              value={form.author}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, author: event.target.value }))
              }
              placeholder="Courchevel Media"
            />
          </label>
          <label>
            <span>Published date</span>
            <input
              type="datetime-local"
              value={form.published_at}
              onChange={(event) =>
                setForm((prev) => ({
                  ...prev,
                  published_at: event.target.value,
                }))
              }
            />
          </label>
          <label>
            <span>Last updated</span>
            <input
              type="text"
              value={
                existingUpdatedAt
                  ? new Date(existingUpdatedAt).toLocaleString()
                  : "Saved automatically on update"
              }
              disabled
            />
          </label>
        </div>

        <label>
          <span>Lead (shown under the H1)</span>
          <textarea
            rows={2}
            value={form.lead}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, lead: event.target.value }))
            }
            placeholder="Short intro shown under the title"
          />
        </label>

        <div className="admin-editor">
          <div className="admin-editor__toolbar">
            <button type="button" onClick={() => insertAtCursor("\n\n## Heading\n\n", true)}>
              H2
            </button>
            <button type="button" onClick={() => insertAtCursor("\n\n### Heading\n\n", true)}>
              H3
            </button>
            <button type="button" onClick={() => wrapSelection("**", "**")}>
              Bold
            </button>
            <button type="button" onClick={() => wrapSelection("*", "*")}>
              Italic
            </button>
            <button type="button" onClick={() => insertAtCursor("\n- List item\n", true)}>
              List
            </button>
            <button type="button" onClick={() => insertAtCursor("\n> Quote text\n\n", true)}>
              Quote
            </button>
            <button
              type="button"
              onClick={() =>
                insertAtCursor("\n[Link text](/magazine/article-slug)\n\n", true)
              }
            >
              Internal link
            </button>
            <button type="button" onClick={() => insertAtCursor("\n[Link text](https://)\n\n", true)}>
              External link
            </button>
            <button
              type="button"
              onClick={() => imageInputRef.current?.click()}
              disabled={uploadingImage}
            >
              {uploadingImage ? "Uploading..." : "Upload image"}
            </button>
            <button
              type="button"
              className={showPreview ? "is-active" : ""}
              onClick={() => setShowPreview((prev) => !prev)}
            >
              {showPreview ? "Edit" : "Preview"}
            </button>
          </div>

          <input
            ref={imageInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              uploadContentImage(file);
            }}
          />

          {showPreview ? (
            <div
              className="admin-editor__preview blog-article__prose"
              dangerouslySetInnerHTML={{
                __html: renderBlogContentToHtml(form.content),
              }}
            />
          ) : (
            <label className="admin-editor__content">
              <span>Content</span>
              <textarea
                ref={contentRef}
                rows={16}
                value={form.content}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, content: event.target.value }))
                }
                placeholder={`Write any blog content here.

## Example heading

Paragraph text goes here.

- Bullet one
- Bullet two

> A short quote

Use **Upload image** to insert photos anywhere in the article.
You can also paste HTML if you need a fully custom layout.`}
                required
              />
            </label>
          )}

          <p className="admin-editor__hint">
            Supports headings, bold, lists, quotes, internal/external links,
            uploaded images with alt text, and raw HTML for fully custom posts.
            Use Internal link for Magazine URLs like{" "}
            <code>/magazine/your-slug</code>.
          </p>
        </div>

        <label>
          <span>Hero / cover image (magazine grid + article hero + OG image)</span>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setCoverFile(event.target.files?.[0] || null)}
          />
          {existingCover ? (
            <img src={existingCover} alt="" className="admin-form__preview" />
          ) : null}
        </label>

        <label>
          <span>Hero image alt text</span>
          <input
            value={form.cover_alt}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, cover_alt: event.target.value }))
            }
            placeholder="Describe the hero photo for SEO and accessibility"
          />
        </label>

        <label className="admin-form__checkbox">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                published: event.target.checked,
              }))
            }
          />
          <span>Published</span>
        </label>

        <div className="admin-form__actions">
          <button type="submit" disabled={saving}>
            {saving ? "Saving..." : editingId ? "Update blog" : "Create blog"}
          </button>
          {editingId ? (
            <button type="button" className="is-ghost" onClick={resetForm}>
              Cancel
            </button>
          ) : null}
        </div>
      </form>

      <div className="admin-table-wrap">
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Slug</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.published ? "Published" : "Draft"}</td>
                  <td>{post.slug}</td>
                  <td className="admin-table__actions">
                    <button type="button" onClick={() => startEdit(post)}>
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
