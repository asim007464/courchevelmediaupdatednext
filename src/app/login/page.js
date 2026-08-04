import { Suspense } from "react";
import LoginForm from "@/components/admin/LoginForm";

export const metadata = {
  title: "Admin Login | Courchevel Media",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="admin-auth">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
