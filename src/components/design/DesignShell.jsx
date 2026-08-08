"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { IconFacebook, IconInstagram, IconTikTok, IconWhatsApp } from "@/components/design/DesignIcons";
import { DESIGN_LOGO } from "@/lib/designImages";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/designLinks";

const NAV = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Packages", href: "/#packages" },
  { label: "Magazine", href: "/magazine" },
];

function scrollToHash(href) {
  if (!href.includes("#")) return false;
  const id = href.split("#")[1];
  const el = document.getElementById(id);
  if (!el) return false;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 24,
    behavior: "smooth",
  });
  return true;
}

export function DesignNav({ active = "" }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [stuck, setStuck] = useState(false);

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
      className="ds-btn ds-btn--primary"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "9px 14px",
        fontSize: "var(--text-xs)",
        gap: 6,
        background: "#25d366",
        color: "#fff",
        borderColor: "#25d366",
      }}
    >
      <IconWhatsApp /> CONTACT US
    </a>
  );

  const handleNav = (event, href) => {
    if (href.startsWith("/#") && (pathname === "/" || pathname === "")) {
      event.preventDefault();
      scrollToHash(href);
      setMenu(false);
      window.history.replaceState(null, "", href);
    } else {
      setMenu(false);
    }
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
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            color: "var(--text-primary)",
            minWidth: 0,
          }}
        >
          <img src={DESIGN_LOGO} alt="" style={{ height: 38, width: "auto" }} />
          <span
            style={{
              fontSize: "var(--text-lg)",
              fontWeight: "var(--weight-medium)",
              whiteSpace: "nowrap",
            }}
          >
            Courchevel Media
          </span>
        </Link>

        <div className="navlinks" style={{ display: "flex", gap: "var(--space-8)" }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNav(event, item.href)}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-medium)",
                color:
                  active === item.label ||
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
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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

const FOOTER_COLS = [
  {
    title: "Company",
    links: [{ label: "About", href: "/about" }],
  },
  {
    title: "Magazine",
    links: [
      { label: "All Articles", href: "/magazine" },
      { label: "Behind the Scenes", href: "/magazine" },
      { label: "How We Capture It", href: "/magazine" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/Privacy" },
      { label: "Service Policy", href: "/Service" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM_URL, icon: <IconInstagram /> },
  { label: "TikTok", href: "https://www.tiktok.com", icon: <IconTikTok /> },
  { label: "Facebook", href: "https://www.facebook.com", icon: <IconFacebook /> },
];

export function DesignFooter() {
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
            Private photography and filmmaking for ski holidays and events in Courchevel.
          </p>
        </div>
        {FOOTER_COLS.map((col) => (
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
                  className="footlink"
                  style={{ fontSize: "var(--text-sm)", color: "var(--text-tertiary)" }}
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
          © {new Date().getFullYear()} Courchevel Media. All rights reserved.
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
