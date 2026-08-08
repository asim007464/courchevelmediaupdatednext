import DesignAbout from "@/components/design/DesignAbout";

export const metadata = {
  title: "About | Courchevel Media",
  description:
    "How Courchevel Media documents ski holidays with discretion — skiing beside you so the camera never interrupts the day.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <DesignAbout />;
}
