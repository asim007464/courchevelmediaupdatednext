import Home from "@/components/Home";
import JsonLd from "@/components/JsonLd";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the booking process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A quick WhatsApp message is all it takes. We confirm your date, adapt to your plans, and take care of everything from there.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide drone footage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every package includes cinematic aerial shots to give your experience breathtaking perspectives.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get the final video and photos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your edited photos and film are usually ready within 3 days. Express delivery is available during peak season if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you shoot in multiple locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can capture moments across the 3 Vallées area, both on and off the slopes.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Home />
    </>
  );
}
