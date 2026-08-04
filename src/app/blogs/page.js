import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Blogs | Courchevel Media",
  description:
    "Guides and notes from Courchevel Media on ski photography, filming, and planning your alpine experience.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <BlogIndex />;
}
