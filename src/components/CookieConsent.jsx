"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function loadGoogleAnalytics() {
  if (!GA_ID || typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

export default function CookieConsent() {
  useEffect(() => {
    let mounted = true;

    import("vanilla-cookieconsent").then(({ run }) => {
      if (!mounted) return;

      run({
        categories: {
          necessary: { enabled: true, readOnly: true },
          analytics: {},
        },
        language: {
          default: "en",
          translations: {
            en: {
              consentModal: {
                title: "We use cookies",
                description:
                  "We use cookies to analyze site traffic and improve your experience. You can accept or reject analytics cookies.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
              },
              preferencesModal: {
                title: "Cookie preferences",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                savePreferencesBtn: "Save preferences",
                sections: [
                  {
                    title: "Necessary",
                    description:
                      "Required for the website to function. These cannot be disabled.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Analytics",
                    description:
                      "Help us understand how visitors use our site (Google Analytics).",
                    linkedCategory: "analytics",
                  },
                ],
              },
            },
          },
        },
        onConsent: ({ cookie }) => {
          if (cookie.categories.includes("analytics")) {
            loadGoogleAnalytics();
          }
        },
        onChange: ({ cookie }) => {
          if (cookie.categories.includes("analytics")) {
            loadGoogleAnalytics();
          }
        },
      });
    });

    return () => {
      mounted = false;
    };
  }, []);

  return null;
}
