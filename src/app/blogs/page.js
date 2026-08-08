import { redirect } from "next/navigation";

export const metadata = {
  title: "Magazine | Courchevel Media",
  alternates: { canonical: "/magazine" },
};

export default function BlogsRedirectPage() {
  redirect("/magazine");
}
