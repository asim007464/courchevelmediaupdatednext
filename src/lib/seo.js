export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://courchevelmedia.com";

export const SITE_NAME = "Courchevel Media";

export const SEO_KEYWORDS = [
  "Courchevel ski photographer",
  "Courchevel ski videographer",
  "luxury ski photography Courchevel",
  "ski holiday video Courchevel",
  "Courchevel drone footage",
  "3 Vallées ski photography",
  "luxury ski videography France",
  "après-ski photography Courchevel",
  "private event video Courchevel",
  "cinematic ski video Courchevel",
];

export const defaultMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Courchevel Media | Luxury Ski Photography and Videography",
    template: "%s | Courchevel Media",
  },
  description:
    "Your ski holiday, captured like cinema. Exclusive photo and video service in Courchevel with discretion, cinematic quality, and fast delivery. Book via WhatsApp.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Courchevel Media | Luxury Ski Photography and Videography",
    description:
      "Your ski holiday, captured like cinema. Exclusive photo and video service in Courchevel with discretion and fast delivery. Reserve on WhatsApp.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Courchevel Media - Luxury Ski Photography and Videography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Courchevel Media | Luxury Ski Photography and Videography",
    description:
      "Your ski holiday, captured like cinema. Exclusive photo and video service in Courchevel.",
    images: ["/images/hero-bg.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-48x48.png",
  },
  verification: {
    google: "7zq_33SyYybf2b-HcSrTEBplEaXcWYNERmjzVz2CGEg",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Luxury ski photography and videography in Courchevel and the 3 Vallées. Cinematic photo and video for ski holidays, private events, and après-ski.",
  url: SITE_URL,
  image: `${SITE_URL}/images/reallogoofwebsite.webp`,
  telephone: "+33784534489",
  areaServed: [
    { "@type": "Place", name: "Courchevel" },
    { "@type": "Place", name: "Les 3 Vallées" },
    { "@type": "Country", name: "France" },
  ],
  serviceType: [
    "Ski Photography",
    "Ski Videography",
    "Drone Footage",
    "Event Photography",
    "Luxury Travel Content",
  ],
  sameAs: ["https://www.instagram.com/courchevelmedia"],
  priceRange: "€€€",
};
