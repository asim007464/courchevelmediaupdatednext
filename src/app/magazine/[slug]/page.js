import DesignArticle from "@/components/design/DesignArticle";
import JsonLd from "@/components/JsonLd";
import { getGuideBySlug } from "@/lib/magazine";
import { buildArticleMetadata, buildBlogPostingSchema } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  return buildArticleMetadata(guide || { slug, title: slug.replace(/-/g, " ") });
}

export default async function MagazineSlugPage({ params }) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  const schema = buildBlogPostingSchema(guide);

  return (
    <>
      {schema ? <JsonLd data={schema} /> : null}
      <DesignArticle slug={slug} />
    </>
  );
}
