import Link from "next/link";

const CARDS = [
  {
    href: "/admin/pricing",
    title: "Pricing plans",
    description: "Update ski and events package titles, prices, and features.",
  },
  {
    href: "/admin/gallery",
    title: "Sliding gallery",
    description: "Upload and manage images for the Selected Work slider.",
  },
  {
    href: "/admin/blogs",
    title: "Blogs",
    description: "Create, edit, publish, and upload blog cover images.",
  },
];

export default function AdminHomePage() {
  return (
    <div className="admin-page">
      <header className="admin-page__header">
        <h1>Admin panel</h1>
        <p>Manage site content powered by Supabase.</p>
      </header>
      <div className="admin-page__grid">
        {CARDS.map((card) => (
          <Link key={card.href} href={card.href} className="admin-card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
