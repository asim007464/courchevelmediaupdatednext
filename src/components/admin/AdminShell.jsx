"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const LINKS = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/pricing", label: "Pricing" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/blogs", label: "Blogs" },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.replace("/login");
    router.refresh();
  };

  return (
    <div className="admin-shell">
      <aside className="admin-shell__sidebar">
        <Link href="/admin" className="admin-shell__brand">
          CM Admin
        </Link>
        <nav className="admin-shell__nav">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ||
                (link.href !== "/admin" && pathname.startsWith(link.href))
                  ? "is-active"
                  : ""
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="admin-shell__footer">
          <Link href="/">View site</Link>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </aside>
      <main className="admin-shell__main">{children}</main>
    </div>
  );
}
