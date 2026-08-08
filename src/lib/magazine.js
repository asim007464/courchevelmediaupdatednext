import { DESIGN_GUIDES, FEATURED_GUIDE, designImage } from "@/lib/designImages";
import { fetchBlogBySlug, fetchPublishedBlogs } from "@/lib/supabase/content";

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function estimateMinutes(text) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 180));
}

export function mapBlogToGuide(blog, index = 0) {
  return {
    source: "supabase",
    id: blog.id,
    slug: blog.slug,
    category: blog.category || "Magazine",
    title: blog.title,
    description: blog.lead || "",
    minutes: blog.minutes || estimateMinutes(blog.content || blog.lead),
    slot: `guide-${(index % 9) + 1}`,
    cover: blog.cover_image || designImage(`guide-${(index % 9) + 1}`),
    content: blog.content || "",
    lead: blog.lead || "",
  };
}

export function mapDesignGuide(guide) {
  return {
    source: "design",
    ...guide,
    cover: designImage(guide.slot),
    content: "",
    lead: guide.description,
  };
}

export async function getMagazineGuides() {
  const blogs = await fetchPublishedBlogs();
  const fromCms = (blogs || []).map((blog, i) => mapBlogToGuide(blog, i));
  const cmsSlugs = new Set(fromCms.map((g) => g.slug));
  const designFallback = DESIGN_GUIDES.map(mapDesignGuide).filter((g) => !cmsSlugs.has(g.slug));
  return [...fromCms, ...designFallback];
}

export async function getFeaturedGuide(guides) {
  const list = guides || (await getMagazineGuides());
  const featured = list.find((g) => g.slug === FEATURED_GUIDE.slug) || list[0];
  if (featured) return featured;
  return mapDesignGuide(FEATURED_GUIDE);
}

export async function getGuideBySlug(slug) {
  const blog = await fetchBlogBySlug(slug);
  if (blog) return mapBlogToGuide(blog);

  const design =
    DESIGN_GUIDES.find((g) => g.slug === slug) ||
    (FEATURED_GUIDE.slug === slug ? FEATURED_GUIDE : null);

  if (design) return mapDesignGuide(design);

  const guides = await getMagazineGuides();
  return guides.find((g) => g.slug === slug) || null;
}

export function relatedGuides(currentSlug, guides, count = 6) {
  return guides.filter((g) => g.slug !== currentSlug).slice(0, count);
}

export { slugify };
