import DesignMagazine from "@/components/design/DesignMagazine";

export const metadata = {
  title: "Magazine | Courchevel Media",
  description:
    "Guides and notes from Courchevel Media on ski photography, filming, and planning your alpine experience.",
  alternates: { canonical: "/magazine" },
};

export default function MagazinePage() {
  return <DesignMagazine />;
}
