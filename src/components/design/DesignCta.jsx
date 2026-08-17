"use client";

import { IconInstagram, IconWhatsApp } from "@/components/design/DesignIcons";
import { useLanguage } from "@/context/LanguageProvider";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/designLinks";

export default function DesignCta({
  title,
  body,
  secondaryHref = INSTAGRAM_URL,
  secondaryLabel,
  secondaryExternal = true,
}) {
  const { t } = useLanguage();
  const resolvedTitle =
    title ??
    (
      <>
        {t("ready.title")}
        <span className="gradient-text">{t("ready.titleGradient")}</span>
      </>
    );
  const resolvedBody = body ?? t("ready.text");
  const resolvedSecondary = secondaryLabel ?? t("hero.instagram").toUpperCase();

  return (
    <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
      <div
        className="cta-panel"
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          background: "var(--surface-raised)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "var(--space-24) var(--space-16)",
          textAlign: "center",
        }}
      >
        <h2
          className="cta-h2"
          style={{ fontSize: "var(--text-3xl)", fontWeight: "var(--weight-bold)", margin: "0 0 16px" }}
        >
          {resolvedTitle}
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            margin: "0 auto 40px",
            maxWidth: 720,
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {resolvedBody}
        </p>
        <div className="cta-actions" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
          <a
            className="ds-btn ds-btn--secondary"
            href={secondaryHref}
            {...(secondaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {resolvedSecondary === "INSTAGRAM" || resolvedSecondary === t("hero.instagram").toUpperCase() ? (
              <IconInstagram />
            ) : null}
            {resolvedSecondary}
          </a>
          <a
            className="ds-btn ds-btn--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsApp /> {t("nav.contactUs")}
          </a>
        </div>
      </div>
    </section>
  );
}
