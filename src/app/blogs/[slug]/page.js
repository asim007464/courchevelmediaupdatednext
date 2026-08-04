import BlogPost from "@/components/BlogPost";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Courchevel Media`,
    alternates: { canonical: `/blogs/${slug}` },
  };
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
