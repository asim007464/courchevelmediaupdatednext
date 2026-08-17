"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DesignReveal from "@/components/design/DesignReveal";
import DesignCta from "@/components/design/DesignCta";
import { DesignShell } from "@/components/design/DesignShell";
import { IconInstagram, IconWhatsApp } from "@/components/design/DesignIcons";
import { useLanguage } from "@/context/LanguageProvider";
import { DESIGN_PACKAGES } from "@/lib/designImages";
import { INSTAGRAM_URL, WHATSAPP_URL, packageWhatsAppUrl } from "@/lib/designLinks";
import { fetchGalleryImages, fetchPricingPlans } from "@/lib/supabase/content";
import { getImageSrc } from "@/lib/getImageSrc";
import { defaultGalleryCollections } from "@/Data/galleryDefaults";

const SHOWREEL = {
  ski: {
    // Web-optimized (~29MB @ ~3.5Mbps) with faststart for progressive playback
    src: "https://lnbj0wjl9e5lhlz0.public.blob.vercel-storage.com/showreels/trailer-ski-web.mp4",
    poster: "/videos/poster.webp",
  },
  events: {
    // Web-optimized (~21MB @ ~3.5Mbps) with faststart for progressive playback
    src: "https://lnbj0wjl9e5lhlz0.public.blob.vercel-storage.com/showreels/trailer-events-web.mp4",
    poster: "/videos/event-poster.webp",
  },
};

const BRANDS = [
  { name: "Baïes", src: "/images/companieslogos/Baies%20Courchevel.webp" },
  { name: "Courchevel", src: "/images/companieslogos/Courchevel%20Tourisme.webp" },
  { name: "Derbike", src: "/images/companieslogos/Derbike.webp" },
  { name: "L'Atelier", src: "/images/companieslogos/LAtelier.webp" },
  { name: "Mangeoire", src: "/images/companieslogos/Mangeoire%20Courchevel.webp" },
  { name: "Manufacture Alpine", src: "/images/companieslogos/Manufacture%20Alpine.webp" },
  { name: "Obermeyer", src: "/images/companieslogos/Obermeyer.webp" },
  { name: "Red Bull", src: "/images/companieslogos/Red%20Bull%20Courchevel.webp" },
];

const REVIEWS = [
  ["Ria Tab", 5, "Nov 8, 2024", "As artistic director for this place, I have never seen such professionalism and beauty in one. Gracias Kevin."],
  ["Niccolo Bucciero", 5, "Nov 5, 2024", "Kevin was a great support catching the content I need for my professional content. It was very professional working with him and he is very punctual. He is my go to when needed to shoot some content."],
  ["Emanuele Corno", 5, "Nov 5, 2024", "As a ski instructor in Courchevel and across the Alps, I often have clients who want photos and videos of their experience. I have relied on Courchevel Media multiple times, and I can confidently say that neither I nor my clients have ever been disappointed."],
  ["Elin Silverio", 5, "Nov 5, 2024", "I have worked with Kevin several times and I do not trust anyone else. In addition to being very professional, he manages to put you at ease and creates a relaxed environment. The best filmmaker in Courchevel, without a doubt."],
  ["Gustavo Ruybal", 5, "Nov 5, 2024", "Great service, we called Kevin to do a photo shoot for a marriage proposal. The result was surprising. I recommend it, excellent professional."],
  ["Corinne Dumas", 5, "Nov 2, 2024", "Absolutely discreet throughout our week, and the film he delivered is everything we hoped for. Thank you."],
];

function Tabs({ options, active, onChange, ariaLabel, className = "tabs" }) {
  return (
    <div className={className} role="tablist" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={option.value === active}
          className="tab"
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Stars({ n }) {
  return (
    <span className="stars" aria-label={`${n} out of 5`}>
      {"★".repeat(n)}
    </span>
  );
}

const SIZE_PATTERN = ["tall", "std", "std", "wide", "std", "std", "tall", "std", "std"];

function sizeForIndex(i) {
  return SIZE_PATTERN[i % SIZE_PATTERN.length];
}

function resolveSrc(src) {
  return getImageSrc(src);
}

function mapGalleryItems(items, prefix = "gal") {
  return (items || []).map((item, i) => ({
    id: `${prefix}-${i}`,
    size: sizeForIndex(i),
    src: resolveSrc(item.src),
    alt: item.alt || `Portfolio ${i + 1}`,
  }));
}

const DEFAULT_PORTFOLIO = {
  ski: mapGalleryItems(defaultGalleryCollections.ski, "ski"),
  events: mapGalleryItems(defaultGalleryCollections.events, "events"),
};

function HomeHero() {
  const { t } = useLanguage();
  return (
    <section className="home-hero">
      <h1 className="home-h1">
        {t("hero.titleBefore")}
        {t("hero.titleMiddle")}
        <span className="gradient-text">{t("hero.titleGradient")}</span>
      </h1>
      <p className="home-lead">{t("hero.subtitle")}</p>
      <div
        className="cta-actions"
        style={{
          display: "flex",
          gap: "var(--space-4)",
          justifyContent: "center",
          marginTop: "var(--space-10)",
        }}
      >
        <a className="ds-btn ds-btn--secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          <IconInstagram /> {t("hero.instagram").toUpperCase()}
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
    </section>
  );
}

function Showreel() {
  const { t } = useLanguage();
  const tabs = useMemo(
    () => [
      { value: "ski", label: t("common.ski") },
      { value: "events", label: t("common.events") },
    ],
    [t]
  );
  const [tab, setTab] = useState("ski");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const active = SHOWREEL[tab];

  useEffect(() => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [tab]);

  useEffect(() => {
    if (!playing || !videoRef.current) return;
    const video = videoRef.current;
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => setPlaying(false));
    }
  }, [playing, tab]);

  const startPlayback = () => setPlaying(true);

  return (
    <DesignReveal>
      <section style={{ padding: "0 0 var(--space-24)" }}>
        <div className="reel">
        {playing ? (
          <video
            key={tab}
            ref={videoRef}
            controls
            playsInline
            autoPlay
            preload="auto"
            poster={active.poster}
            onError={() => setPlaying(false)}
          >
            <source src={active.src} type='video/mp4; codecs="avc1.640028, mp4a.40.2"' />
          </video>
        ) : (
          <button
            type="button"
            className="reel-poster"
            onClick={startPlayback}
            aria-label={`Play ${tabs.find((item) => item.value === tab)?.label || tab} showreel`}
          >
            <img
              src={active.poster}
              alt={`${tabs.find((item) => item.value === tab)?.label || tab} showreel still`}
              className="design-img"
              draggable="false"
            />
            <span className="reel-play" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="reel-bar" aria-hidden="true">
              <span className="reel-dot" />
              <span className="reel-track">
                <span className="reel-fill" />
              </span>
              <span className="reel-time">0:28 / 1:12</span>
            </span>
          </button>
        )}
      </div>
        <Tabs options={tabs} active={tab} onChange={setTab} ariaLabel="Showreel type" className="tabs reel-tabs" />
      </section>
    </DesignReveal>
  );
}

function TrustedBy() {
  const { t } = useLanguage();
  return (
    <DesignReveal>
      <section style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center" style={{ marginBottom: "var(--space-12)" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "var(--text-md)",
              fontWeight: "var(--weight-bold)",
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
              color: "var(--text-primary)",
            }}
          >
            {t("trusted.title")}
          </h2>
          <p
            style={{
              margin: "var(--space-4) 0 0",
              fontSize: "var(--text-sm)",
              color: "var(--text-tertiary)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            {t("trusted.subtitle")}
          </p>
        </div>
        <div className="brands">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="brandslot">
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                className="design-img"
                style={{ objectFit: "contain" }}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </section>
    </DesignReveal>
  );
}

function PrivateWork() {
  const { t } = useLanguage();
  const cards = t("solution.cards") || [];
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <span id="what-we-do" className="anchor" aria-hidden="true" />
        <div className="editorial">
          <div className="editorial-head">
            <h2 className="sec-title">
              {t("solution.title")} <span className="gradient-text">{t("solution.titleGradient")}</span>
            </h2>
            <p className="sec-sub" style={{ marginTop: "var(--space-6)" }}>
              {t("solution.subtitle")}
            </p>
          </div>
          <div className="editorial-img">
            <img
              src="/homepageimgs/courchevel-private-ski-photography.webp"
              alt="Two skiers photographed during a private ski holiday in Courchevel."
              className="design-img"
              loading="lazy"
              draggable="false"
            />
          </div>
          <div className="pillars">
            {(Array.isArray(cards) ? cards : []).map((card) => (
              <div key={card.title} className="pillar">
                <h3 className="pillar-title">{card.title}</h3>
                <p className="pillar-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DesignReveal>
  );
}

function Portfolio({ itemsByTab }) {
  const { t } = useLanguage();
  const tabs = useMemo(
    () => [
      { value: "ski", label: t("portfolio.skiTab", "Ski Holidays") },
      { value: "events", label: t("portfolio.eventsTab", "Private Events") },
    ],
    [t]
  );
  const [tab, setTab] = useState("ski");
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const drag = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = 0;
      setProgress(0);
    }
  }, [tab]);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const down = (e) => {
    const el = ref.current;
    drag.current = { x: e.clientX, left: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    el.classList.add("dragging");
  };
  const move = (e) => {
    if (!drag.current) return;
    ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => {
    drag.current = null;
    ref.current?.classList.remove("dragging");
  };

  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            <span id="portfolio" className="anchor" aria-hidden="true" />
            {t("portfolio.title")}
            <span className="gradient-text">{t("portfolio.titleGradient")}</span>
          </h2>
          <p className="sec-sub">{t("portfolio.subtitle", "A glimpse into the moments we have had the privilege to capture.")}</p>
        </div>
        <Tabs options={tabs} active={tab} onChange={setTab} ariaLabel="Portfolio category" />
        <div
          className="pfscroll"
          ref={ref}
          tabIndex={0}
          role="region"
          aria-label={`${tabs.find((item) => item.value === tab)?.label || tab} gallery, scroll horizontally`}
          onScroll={onScroll}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
        >
          <div className="pfgrid">
            {(itemsByTab[tab] || []).map((item) => (
              <figure key={item.id} className={`pfitem ${item.size}`}>
                <img src={item.src} alt={item.alt} className="design-img" draggable="false" />
              </figure>
            ))}
          </div>
        </div>
        <div className="pfmeter" aria-hidden="true">
          <span style={{ transform: `translateX(${progress * 300}%)` }} />
        </div>
        <p className="pfhint" aria-hidden="true">
          <span>←</span> {t("portfolio.dragHint", "Drag to explore more")} <span>→</span>
        </p>
      </section>
    </DesignReveal>
  );
}

function Process() {
  const { t } = useLanguage();
  const steps = t("process.steps") || [];
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head">
          <h2 className="sec-title">
            {t("process.title")} <span className="gradient-text">{t("process.titleGradient")}</span>
          </h2>
          <p className="sec-sub">{t("process.subtitle", "We make it easy from the first message to the final delivery.")}</p>
        </div>
        <div className="steps">
          {(Array.isArray(steps) ? steps : []).map((step, i) => (
            <div key={step.title} className="step">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="step-body">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DesignReveal>
  );
}

function Reviews() {
  const { t } = useLanguage();
  // Duplicate once so -50% translate loops seamlessly right → left
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            <span id="reviews" className="anchor" aria-hidden="true" />
            {t("reviews.title")}
            <span className="gradient-text">{t("reviews.titleGradient")}</span>
            {t("reviews.titleEnd", "")}
          </h2>
        </div>
        <div className="rvrow">
          <div className="rvsummary">
            <p className="rvsum-label">{t("reviews.excellent")}</p>
            <Stars n={5} />
            <p className="rvsum-sub">{t("design.basedOnOur")}</p>
            <div className="rvsum-logo">
              <img
                src="/images/googlereviews.webp"
                alt="Google reviews"
                className="design-img"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </div>
            <a
              className="ds-btn ds-btn--secondary"
              href="https://maps.app.goo.gl/peLM2SUPLABFt1cA9"
              target="_blank"
              rel="noreferrer"
              style={{
                borderRadius: "var(--radius-md)",
                letterSpacing: "var(--tracking-wider)",
                fontSize: "var(--text-xs)",
                padding: "11px 18px",
                marginTop: "auto",
              }}
            >
              {t("reviews.readMore").toUpperCase()}
            </a>
          </div>
          <div className="rvviewport" aria-label="Client reviews">
            <div className="rvtrack">
              {loop.map(([name, stars, date, text], i) => (
                <figure key={`${name}-${i}`} className="rvcard">
                  <div className="rvtop">
                    <Stars n={stars} />
                    <span className="rvdate">{date}</span>
                  </div>
                  <figcaption className="rvname">{name}</figcaption>
                  <blockquote className="rvtext">{text}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </DesignReveal>
  );
}

function Packages({ packages }) {
  const { t, locale } = useLanguage();
  const tabs = useMemo(
    () => [
      { value: "ski", label: t("common.ski") },
      { value: "events", label: t("common.events") },
    ],
    [t]
  );
  const [tab, setTab] = useState("ski");

  const translated = t("pricing.packages");
  const displayPackages = useMemo(() => {
    if (locale === "en") return packages;
    const tab1 = translated?.tab1;
    const tab2 = translated?.tab2;
    if (!tab1?.length && !tab2?.length) return packages;
    return {
      ski: tab1?.length ? tab1 : packages.ski,
      events: tab2?.length ? tab2 : packages.events,
    };
  }, [locale, packages, translated]);

  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            <span id="packages" className="anchor" aria-hidden="true" />
            {t("pricing.title")}
            <span className="gradient-text">{t("pricing.titleGradient")}</span>
          </h2>
          <p className="sec-sub">
            {t(
              "pricing.subtitle",
              "Whether you are capturing a single day or your entire holiday, each experience is tailored to your plans and delivered with the same attention to detail."
            )}
          </p>
        </div>
        <Tabs options={tabs} active={tab} onChange={setTab} ariaLabel="Experience type" />
        <div className="pkgrid">
          {(displayPackages[tab] || []).map((pkg) => {
            const title = pkg.title || pkg.name;
            const features = pkg.features || pkg.items || [];
            const action = pkg.ctaLabel || pkg.action || t("pricing.bookNow");
            const price = String(pkg.price || "");
            const showFrom =
              !price.toLowerCase().startsWith("from") &&
              !price.toLowerCase().startsWith("custom") &&
              !price.toLowerCase().startsWith("desde");
            return (
              <div key={title} className="pkcard">
                <h3 className="pk-name">{title}</h3>
                <p className="pk-price">
                  {showFrom ? `${t("pricing.from")} ${pkg.price}` : pkg.price}
                </p>
                <p className="pk-blurb">{pkg.description || pkg.blurb}</p>
                <ul className="pk-list">
                  {features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="ds-btn ds-btn--secondary"
                  href={packageWhatsAppUrl(pkg)}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    borderRadius: "var(--radius-md)",
                    width: "100%",
                    marginTop: "auto",
                    padding: "12px 18px",
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--weight-medium)",
                  }}
                >
                  {action}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </DesignReveal>
  );
}

function Faq() {
  const { t } = useLanguage();
  const faqs = Array.isArray(t("faq.items")) ? t("faq.items") : [];
  const initial = 4;
  const [open, setOpen] = useState(-1);
  const [all, setAll] = useState(false);
  const shown = all ? faqs : faqs.slice(0, initial);

  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            {t("design.faqTitle")} <span className="gradient-text">{t("design.faqTitleGradient")}</span>
          </h2>
          <p className="sec-sub">{t("design.faqSubtitle")}</p>
        </div>
        <div className="faq">
          {shown.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className={`faq-item${isOpen ? " open" : ""}`}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={(event) => {
                      setOpen(isOpen ? -1 : i);
                      event.currentTarget.blur();
                    }}
                  >
                    <span className="faq-qtext">{item.question}</span>
                    <svg
                      className="faq-chev"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </h3>
                <div
                  className="faq-panel"
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  hidden={!isOpen}
                >
                  <p className="faq-a">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
        {faqs.length > initial && !all ? (
          <div className="faq-more">
            <button
              type="button"
              className="ds-btn ds-btn--secondary"
              onClick={() => setAll(true)}
              style={{
                borderRadius: "var(--radius-md)",
                letterSpacing: "var(--tracking-wider)",
                fontSize: "var(--text-sm)",
                padding: "14px 26px",
                fontWeight: "var(--weight-medium)",
              }}
            >
              {t("design.viewAllFaqs")}
            </button>
          </div>
        ) : null}
      </section>
    </DesignReveal>
  );
}

export default function DesignHome() {
  const [portfolio, setPortfolio] = useState(DEFAULT_PORTFOLIO);
  const [packages, setPackages] = useState({
    ski: DESIGN_PACKAGES.Ski,
    events: DESIGN_PACKAGES.Events,
  });

  useEffect(() => {
    let active = true;

    Promise.all([
      fetchGalleryImages("ski"),
      fetchGalleryImages("events"),
      fetchPricingPlans(),
    ]).then(([ski, events, pricing]) => {
      if (!active) return;

      const skiItems = mapGalleryItems(ski, "ski");
      const eventItems = mapGalleryItems(events, "events");
      setPortfolio({
        ski: skiItems.length ? skiItems : DEFAULT_PORTFOLIO.ski,
        events: eventItems.length ? eventItems : DEFAULT_PORTFOLIO.events,
      });

      if (pricing?.tab1?.length || pricing?.tab2?.length) {
        setPackages({
          ski: pricing.tab1?.length ? pricing.tab1 : DESIGN_PACKAGES.Ski,
          events: pricing.tab2?.length ? pricing.tab2 : DESIGN_PACKAGES.Events,
        });
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <DesignShell>
      <HomeHero />
      <Showreel />
      <TrustedBy />
      <PrivateWork />
      <Portfolio itemsByTab={portfolio} />
      <Process />
      <Reviews />
      <Packages packages={packages} />
      <Faq />
      <DesignReveal>
        <DesignCta />
      </DesignReveal>
    </DesignShell>
  );
}
