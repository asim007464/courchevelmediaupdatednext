import { createClient } from "@/lib/supabase/client";
import {
  defaultGalleryCollections,
  isExclusionRow,
} from "@/Data/galleryDefaults";

export async function fetchPricingPlans() {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("pricing_plans")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data?.length) return null;

  const mapPlan = (plan) => ({
    title: plan.title,
    price: plan.price,
    description: plan.description || "",
    features: Array.isArray(plan.features) ? plan.features : [],
    ctaLabel: plan.cta_label || undefined,
  });

  return {
    tab1: data.filter((plan) => plan.tab === "ski").map(mapPlan),
    tab2: data.filter((plan) => plan.tab === "events").map(mapPlan),
    tab3: [],
  };
}

function normalizePosition(value) {
  const allowed = new Set([
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top left",
    "top right",
    "bottom left",
    "bottom right",
  ]);
  const position = String(value || "center").toLowerCase().trim();
  return allowed.has(position) ? position : "center";
}

function normalizeLayoutSize(value, fallback = "auto") {
  const size = String(value ?? fallback).toLowerCase().trim();
  if (size === "portrait" || size === "landscape" || size === "square") {
    return size;
  }
  return "auto";
}

function layoutToGridSize(layoutSize) {
  if (layoutSize === "landscape") return "std";
  if (layoutSize === "square") return "square";
  if (layoutSize === "portrait") return "tall";
  return null;
}

export async function fetchGalleryState(category) {
  const defaults = defaultGalleryCollections[category] || [];
  const supabase = createClient();

  const mapDefault = (item, override = null) => {
    const layoutSize = normalizeLayoutSize(override?.layout_size, "auto");
    const size = layoutToGridSize(layoutSize);
    return {
      src: item.src,
      alt: override?.alt && override.alt !== "" ? override.alt : item.alt,
      width: item.width,
      height: item.height,
      orientation: item.orientation,
      objectPosition: normalizePosition(override?.object_position),
      layoutSize,
      ...(size ? { size } : {}),
      sort_order: override?.sort_order ?? item.sort_order,
    };
  };

  if (!supabase) {
    return defaults.map((item) => mapDefault(item)).sort((a, b) => a.sort_order - b.sort_order);
  }

  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .eq("category", category)
    .order("sort_order", { ascending: true });

  if (error) {
    return defaults.map((item) => mapDefault(item)).sort((a, b) => a.sort_order - b.sort_order);
  }

  const rows = data || [];
  const excluded = new Set(
    rows.filter(isExclusionRow).map((row) => row.image_url)
  );
  const overrides = new Map(
    rows
      .filter((row) => !isExclusionRow(row) && String(row.image_url || "").startsWith("selected://"))
      .map((row) => [row.image_url, row])
  );

  const uploads = rows
    .filter(
      (row) =>
        !isExclusionRow(row) && !String(row.image_url || "").startsWith("selected://")
    )
    .map((image, index) => {
      const layoutSize = normalizeLayoutSize(image.layout_size, "auto");
      const size = layoutToGridSize(layoutSize);
      return {
        src: image.image_url,
        alt: image.alt || `${category} portfolio image ${index + 1}`,
        objectPosition: normalizePosition(image.object_position),
        layoutSize,
        ...(size ? { size } : {}),
        sort_order: image.sort_order ?? index + 1,
      };
    });

  const visibleDefaults = defaults
    .filter((item) => !excluded.has(item.key))
    .map((item) => mapDefault(item, overrides.get(item.key) || null));

  return [...visibleDefaults, ...uploads].sort(
    (a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)
  );
}

export async function fetchGalleryImages(category) {
  return fetchGalleryState(category);
}

export async function fetchPublishedBlogs() {
  const supabase = createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) return [];
  return (data || []).slice().sort((a, b) => {
    const aTime = new Date(a.published_at || a.created_at || 0).getTime();
    const bTime = new Date(b.published_at || b.created_at || 0).getTime();
    return bTime - aTime;
  });
}

export async function fetchBlogBySlug(slug) {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) return null;
  return data;
}
