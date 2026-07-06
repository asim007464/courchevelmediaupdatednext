"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ThirdPartyScripts() {
  useEffect(() => {
    document.documentElement.classList.add("w-mod-js");
    if ("ontouchstart" in window) {
      document.documentElement.classList.add("w-mod-touch");
    }
  }, []);

  return (
    <>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=659602a8a781e80b03a8096b"
        strategy="afterInteractive"
      />
      <Script
        src="https://assets-global.website-files.com/659602a8a781e80b03a8096b/js/webflow.b549dc92c.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://tools.refokus.com/automatic-tabs/bundle.v1.0.0.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://tools.refokus.com/cms-tabs/bundle.v1.0.0.js"
        strategy="afterInteractive"
      />
      <Script id="webflow-ornaments" strategy="afterInteractive">
        {`
          var Webflow = Webflow || [];
          Webflow.push(function () {
            setTimeout(function () {
              document
                .querySelectorAll(
                  ".home-case-studies_ornament, .home-why_ornament, .home-pricing_ornament"
                )
                .forEach(function (el) { el.style.display = "block"; });
            }, 200);
          });
        `}
      </Script>
    </>
  );
}
