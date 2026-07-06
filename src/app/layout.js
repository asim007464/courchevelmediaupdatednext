import { Manrope } from "next/font/google";
import "./globals.css";
import "../App.css";
import "../styles/headStyle.css";
import "../styles/global-styles.css";
import "../styles/styles_home-hiw.css";
import "../styles/styles_home-hero.css";
import "../styles/styles_home-testimonials.css";
import "../styles/styles_home-reviews.css";
import "../styles/styles_home-pricing.css";
import "../styles/styles_home-get-started.css";
import "../styles/styles_home-success-stories.css";
import "../components/Trusted.css";
import "../components/Slider.css";
import "../components/Servicespage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper-bundle.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import CookieConsent from "@/components/CookieConsent";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import JsonLd from "@/components/JsonLd";
import ClientProviders from "@/components/ClientProviders";
import { defaultMetadata, localBusinessSchema } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${manrope.variable} w-mod-js`}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className={`${manrope.className} body`} style={{ fontFamily: "var(--font-manrope), Manrope, sans-serif" }}>
        <ClientProviders>{children}</ClientProviders>
        <CookieConsent />
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
