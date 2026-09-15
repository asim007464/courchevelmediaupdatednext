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

function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

export function buildArticleMetadata(guide) {
  if (!guide) {
    return {
      title: "Article | Courchevel Media Magazine",
      robots: { index: true, follow: true },
    };
  }

  const seoTitle = guide.seoTitle || guide.title;
  const description =
    guide.metaDescription ||
    guide.lead ||
    guide.description ||
    "Courchevel Media Magazine";
  const canonicalPath = `/magazine/${guide.slug}`;
  const imageUrl = absoluteUrl(guide.cover);
  const imageAlt = guide.coverAlt || guide.title || SITE_NAME;

  return {
    title: { absolute: seoTitle },
    description,
    authors: [{ name: guide.author || SITE_NAME }],
    creator: guide.author || SITE_NAME,
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
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      locale: "en_GB",
      url: absoluteUrl(canonicalPath),
      siteName: SITE_NAME,
      title: seoTitle,
      description,
      publishedTime: guide.publishedAt || undefined,
      modifiedTime: guide.updatedAt || undefined,
      authors: [guide.author || SITE_NAME],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: imageAlt,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function buildBlogPostingSchema(guide) {
  if (!guide) return null;

  const url = absoluteUrl(`/magazine/${guide.slug}`);
  const imageUrl = absoluteUrl(guide.cover);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: guide.title,
    name: guide.seoTitle || guide.title,
    description:
      guide.metaDescription || guide.lead || guide.description || undefined,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      "@type": "Person",
      name: guide.author || SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/cm-icon-192.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    datePublished: guide.publishedAt || undefined,
    dateModified: guide.updatedAt || guide.publishedAt || undefined,
    articleSection: guide.category || undefined,
    inLanguage: "en",
  };
}

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
      { url: "/cm-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/cm-icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/cm-icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/cm-favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    shortcut: "/cm-favicon.ico",
    apple: [{ url: "/cm-icon-192.png", sizes: "192x192", type: "image/png" }],
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
  image: `${SITE_URL}/cm-icon-192.png`,
  logo: `${SITE_URL}/cm-icon-192.png`,
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
