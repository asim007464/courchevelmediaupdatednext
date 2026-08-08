import DesignArticle from "@/components/design/DesignArticle";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return {
    title: `${title} | Courchevel Media Magazine`,
    alternates: { canonical: `/magazine/${slug}` },
  };
}

export default async function MagazineSlugPage({ params }) {
  const { slug } = await params;
  return <DesignArticle slug={slug} />;
}
