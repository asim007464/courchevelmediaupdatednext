import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin | Courchevel Media",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
