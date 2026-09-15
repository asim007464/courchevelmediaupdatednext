import { fetchPublishedBlogs } from "@/lib/supabase/content";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap() {
  const lastModified = new Date();
  const blogs = await fetchPublishedBlogs();

  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/magazine`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/Privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/Service`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const articleRoutes = (blogs || []).map((blog) => ({
    url: `${SITE_URL}/magazine/${blog.slug}`,
    lastModified: new Date(
      blog.updated_at || blog.published_at || blog.created_at || lastModified
    ),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
