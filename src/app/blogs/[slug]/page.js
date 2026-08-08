import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ")} | Courchevel Media`,
    alternates: { canonical: `/magazine/${slug}` },
  };
}

export default async function BlogSlugRedirect({ params }) {
  const { slug } = await params;
  redirect(`/magazine/${slug}`);
}
