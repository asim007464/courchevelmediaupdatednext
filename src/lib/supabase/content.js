import { createClient } from "@/lib/supabase/client";

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

export async function fetchGalleryImages(category) {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .eq("category", category)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) return null;

  return data.map((image, index) => ({
    src: image.image_url,
    alt: image.alt || `${category} portfolio image ${index + 1}`,
  }));
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
  return data || [];
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
