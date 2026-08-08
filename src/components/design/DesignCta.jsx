import { IconInstagram, IconWhatsApp } from "@/components/design/DesignIcons";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/designLinks";

export default function DesignCta({
  title = (
    <>
      Ready to <span className="gradient-text">secure your date?</span>
    </>
  ),
  body = "Availability is limited during the season. Send us a message today to reserve your filmmaker in Courchevel.",
  secondaryHref = INSTAGRAM_URL,
  secondaryLabel = "INSTAGRAM",
  secondaryExternal = true,
}) {
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
          {title}
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            margin: "0 auto 40px",
            maxWidth: 720,
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {body}
        </p>
        <div className="cta-actions" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
          <a
            className="ds-btn ds-btn--secondary"
            href={secondaryHref}
            {...(secondaryExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {secondaryLabel === "INSTAGRAM" ? <IconInstagram /> : null}
            {secondaryLabel}
          </a>
          <a className="ds-btn ds-btn--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <IconWhatsApp /> CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
