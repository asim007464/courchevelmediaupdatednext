"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageProvider";
import { IconFacebook, IconInstagram, IconTikTok, IconWhatsApp } from "@/components/design/DesignIcons";
import { DESIGN_LOGO } from "@/lib/designImages";
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL, WHATSAPP_BTN_STYLE } from "@/lib/designLinks";
import { scrollToHash, scrollToHashAfterMount } from "@/lib/smoothScroll";

function isHomePath(pathname) {
  return pathname === "/" || pathname === "";
}

function handleSectionLink(event, href, pathname, router, onComplete) {
  if (!href.startsWith("/#")) return false;

  event.preventDefault();

  if (isHomePath(pathname)) {
    scrollToHash(href);
    window.history.replaceState(null, "", href);
    onComplete?.();
    return true;
  }

  onComplete?.();
  router.push(href, { scroll: false });
  return true;
}

export function DesignNav({ active = "" }) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const [menu, setMenu] = useState(false);
  const [stuck, setStuck] = useState(false);

  const nav = [
    { label: t("nav.whatWeDo"), href: "/#what-we-do", match: "What We Do" },
    { label: t("nav.portfolio"), href: "/#portfolio", match: "Portfolio" },
    { label: t("nav.reviews"), href: "/#reviews", match: "Reviews" },
    { label: t("nav.pricing"), href: "/#packages", match: "Packages" },
    { label: t("nav.magazine"), href: "/magazine", match: "Magazine" },
  ];

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const contact = (
    <a
      className="ds-btn ds-btn--primary ds-btn--whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "9px 14px",
        fontSize: "var(--text-xs)",
        gap: 6,
        ...WHATSAPP_BTN_STYLE,
      }}
    >
      <IconWhatsApp /> {t("nav.contactUs")}
    </a>
  );

  const handleNav = (event, href) => {
    if (handleSectionLink(event, href, pathname, router, () => setMenu(false))) return;
    setMenu(false);
  };

  return (
    <div className={`navwrap ${stuck ? "stuck" : ""}`} style={{ position: "relative" }}>
      <nav
        className={stuck ? "stuck" : ""}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-8)",
          padding: "16px 24px",
          background: "var(--black-2)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <Link href="/" className="nav-brand">
          <img src={DESIGN_LOGO} alt="" className="nav-brand__logo" />
          <span className="nav-brand__text">Courchevel Media</span>
        </Link>

        <div className="navlinks" style={{ display: "flex", gap: "var(--space-8)" }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={item.href.startsWith("/#") ? false : undefined}
              onClick={(event) => handleNav(event, item.href)}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-medium)",
                color:
                  active === item.match ||
                  (item.href === "/magazine" && pathname.startsWith("/magazine"))
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navactions" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <LanguageSwitcher />
          {contact}
        </div>

        <div className="navmobile">
          <LanguageSwitcher />
          <button
            type="button"
            className="navburger"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu((open) => !open)}
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menu ? (
        <div className="navpanel">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={item.href.startsWith("/#") ? false : undefined}
              className="navpanel-link"
              onClick={(event) => handleNav(event, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <div className="navpanel-foot">{contact}</div>
        </div>
      ) : null}
    </div>
  );
}

const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM_URL, icon: <IconInstagram /> },
  { label: "TikTok", href: TIKTOK_URL, icon: <IconTikTok /> },
  { label: "Facebook", href: FACEBOOK_URL, icon: <IconFacebook /> },
];

export function DesignFooter() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();

  const footerCols = [
    {
      title: t("design.company"),
      links: [
        { label: t("design.about"), href: "/about" },
        { label: t("nav.pricing"), href: "/#packages" },
        { label: t("nav.portfolio"), href: "/#portfolio" },
      ],
    },
    {
      title: t("nav.magazine"),
      links: [
        { label: t("design.allArticles"), href: "/magazine" },
        { label: t("design.behindScenes"), href: "/magazine" },
        { label: t("design.howWeCapture"), href: "/magazine" },
      ],
    },
    {
      title: t("design.legal"),
      links: [
        { label: t("design.terms"), href: "/terms" },
        { label: t("design.privacy"), href: "/Privacy" },
        { label: t("design.servicePolicy"), href: "/Service" },
      ],
    },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "var(--space-16)", paddingBottom: "var(--space-12)" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.9fr .8fr .95fr .85fr",
          gap: "var(--space-10)",
        }}
      >
        <div style={{ maxWidth: 340 }}>
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)",
              color: "var(--text-primary)",
              marginBottom: "var(--space-5)",
            }}
          >
            <img src={DESIGN_LOGO} alt="Courchevel Media" style={{ height: 52 }} />
            <span style={{ fontSize: "var(--text-lg)", lineHeight: 1.15, letterSpacing: "var(--tracking-tight)" }}>
              Courchevel Media
            </span>
          </Link>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-tertiary)", lineHeight: "var(--leading-relaxed)" }}>
            {t("design.footerBlurb")}
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <h5
              style={{
                margin: "0 0 var(--space-5)",
                fontSize: "var(--text-xs)",
                color: "var(--text-disabled)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
              }}
            >
              {col.title}
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {col.links.map((link) => (
                <Link
                  key={`${col.title}-${link.label}`}
                  href={link.href}
                  scroll={link.href.startsWith("/#") ? false : undefined}
                  className="footlink"
                  style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)" }}
                  onClick={(event) => handleSectionLink(event, link.href, pathname, router)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "var(--space-6)",
          flexWrap: "wrap",
          borderTop: "1px solid var(--border-subtle)",
          marginTop: "var(--space-16)",
          paddingTop: "var(--space-6)",
        }}
      >
        <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-tertiary)" }}>
          © {new Date().getFullYear()} Courchevel Media. {t("footer.copyright")}
        </p>
        <div style={{ display: "flex", gap: "var(--space-3)" }}>
          {SOCIALS.map((item) => (
            <a key={item.label} href={item.href} aria-label={item.label} className="socialbtn" target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function DesignShell({ children, active = "" }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isHomePath(pathname)) return undefined;
    const hash = window.location.hash;
    if (!hash) return undefined;
    return scrollToHashAfterMount(hash);
  }, [pathname]);

  return (
    <div className="ds-page">
      <div className="shell">
        <DesignNav active={active} />
        {children}
        <DesignFooter />
      </div>
    </div>
  );
}
