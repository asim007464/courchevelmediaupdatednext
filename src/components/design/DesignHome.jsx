"use client";

import { useEffect, useRef, useState } from "react";
import DesignImage from "@/components/design/DesignImage";
import DesignReveal from "@/components/design/DesignReveal";
import DesignCta from "@/components/design/DesignCta";
import { DesignShell } from "@/components/design/DesignShell";
import { IconInstagram, IconWhatsApp } from "@/components/design/DesignIcons";
import { DESIGN_PACKAGES } from "@/lib/designImages";
import { INSTAGRAM_URL, WHATSAPP_URL, packageWhatsAppUrl } from "@/lib/designLinks";
import { fetchGalleryImages, fetchPricingPlans } from "@/lib/supabase/content";
import { getImageSrc } from "@/lib/getImageSrc";
import { defaultGalleryCollections } from "@/Data/galleryDefaults";
import portfolioMood from "@/images/Computer/Ski/Robert Horwitz - USA/9.webp";

const SHOWREEL = {
  Ski: {
    src: "/videos/Showreels/Showreels/Trailer%20ski.mp4",
    poster: "/videos/poster.webp",
  },
  Events: {
    src: "/videos/Showreels/Showreels/Trailer%20events.mp4",
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

const PILLARS = [
  [
    "Tailored to your holiday",
    "Every day on the mountain is different. We adapt to your plans, your pace and your priorities, capturing the moments that matter without ever interrupting the experience.",
  ],
  [
    "Cinematic storytelling",
    "Every moment is captured with the attention and creativity it deserves. From intimate family moments to aerial perspectives, we create photographs and films you will revisit.",
  ],
  [
    "Discretion and privacy",
    "Whether you are travelling with family, friends or colleagues, we work quietly in the background so you can stay present while every important moment is naturally captured.",
  ],
];

const STEPS = [
  [
    "01",
    "Planning",
    "We adapt everything around your holiday, understanding your plans, preferences and priorities before we meet.",
  ],
  [
    "02",
    "Capturing",
    "Enjoy your day while we work discreetly in the background, capturing the moments that matter most.",
  ],
  [
    "03",
    "Delivery",
    "Your professionally edited photos and film are carefully selected and delivered within days.",
  ],
];

const FAQS = [
  [
    "How far in advance should we book?",
    "Most families book four to eight weeks ahead, and earlier for Christmas, February half term and Easter. If your dates are close, message us anyway. We keep a small amount of flexibility through the season.",
  ],
  [
    "What happens if the weather is poor?",
    "We photograph the day you are actually having. Flat light and snowfall often produce our strongest work, and if conditions close the mountain entirely we move the session within your stay at no cost.",
  ],
  [
    "Will you interrupt our holiday?",
    "No. We work quietly in the background, following your plans rather than directing them. Portraits are brief and only when they feel natural.",
  ],
  [
    "When do we receive the photographs and film?",
    "A short selection is shared within a few days, and the full gallery and film follow within two weeks. Urgent selects can be arranged.",
  ],
  [
    "Do you travel outside Courchevel?",
    "Yes. We regularly work across the Trois Vallées and travel further for multi-day bookings and private events.",
  ],
];

const REVIEWS = [
  ["Ria Tab", 5, "Nov 8, 2024", "As artistic director for this place, I have never seen such professionalism and beauty in one. Gracias Kevin."],
  ["Niccolo Bucciero", 5, "Nov 5, 2024", "Kevin was a great support catching the content I need for my professional content. It was very professional working with him and he is very punctual. He is my go to when needed to shoot some content."],
  ["Emanuele Corno", 5, "Nov 5, 2024", "As a ski instructor in Courchevel and across the Alps, I often have clients who want photos and videos of their experience. I have relied on Courchevel Media multiple times, and I can confidently say that neither I nor my clients have ever been disappointed."],
  ["Elin Silverio", 5, "Nov 5, 2024", "I have worked with Kevin several times and I do not trust anyone else. In addition to being very professional, he manages to put you at ease and creates a relaxed environment. The best filmmaker in Courchevel, without a doubt."],
  ["Gustavo Ruybal", 5, "Nov 5, 2024", "Great service, we called Kevin to do a photo shoot for a marriage proposal. The result was surprising. I recommend it, excellent professional."],
  ["Corinne Dumas", 5, "Nov 2, 2024", "Absolutely discreet throughout our week, and the film he delivered is everything we hoped for. Thank you."],
];

function Tabs({ options, active, onChange, ariaLabel }) {
  return (
    <div className="tabs" role="tablist" aria-label={ariaLabel}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={option === active}
          className="tab"
          onClick={() => onChange(option)}
        >
          {option}
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
  "Ski Holidays": mapGalleryItems(defaultGalleryCollections.ski, "ski"),
  "Private Events": mapGalleryItems(defaultGalleryCollections.events, "events"),
};

function HomeHero() {
  return (
    <section className="home-hero">
      <h1 className="home-h1">
        Your ski holiday, <span className="gradient-text">captured like cinema.</span>
      </h1>
      <p className="home-lead">
        Exclusive photo and video service capturing your Courchevel experience with discretion and
        cinematic detail.
      </p>
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
          <IconInstagram /> INSTAGRAM
        </a>
        <a className="ds-btn ds-btn--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <IconWhatsApp /> CONTACT US
        </a>
      </div>
    </section>
  );
}

function Showreel() {
  const tabs = ["Ski", "Events"];
  const [tab, setTab] = useState("Ski");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [tab]);

  useEffect(() => {
    if (!playing || !videoRef.current) return;
    videoRef.current.play().catch(() => setPlaying(false));
  }, [playing, tab]);

  return (
    <section style={{ padding: "0 0 var(--space-24)" }}>
      <div className="reel">
        {playing ? (
          <video
            key={tab}
            ref={videoRef}
            src={SHOWREEL[tab].src}
            controls
            playsInline
            autoPlay
            poster={SHOWREEL[tab].poster}
          />
        ) : (
          <img
            src={SHOWREEL[tab].poster}
            alt={`${tab} showreel still`}
            className="design-img"
            draggable="false"
          />
        )}
        {!playing ? (
          <button
            type="button"
            className="reel-play"
            aria-label={`Play ${tab.toLowerCase()} showreel`}
            onClick={() => setPlaying(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </button>
        ) : null}
        {!playing ? (
          <div className="reel-bar" aria-hidden="true">
            <span className="reel-dot" />
            <span className="reel-track">
              <span className="reel-fill" />
            </span>
            <span className="reel-time">0:28 / 1:12</span>
          </div>
        ) : null}
      </div>
      <div className="tabs reel-tabs" role="tablist" aria-label="Showreel type">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={t === tab}
            className="tab"
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
    </section>
  );
}

function TrustedBy() {
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
            Trusted by
          </h2>
          <p
            style={{
              margin: "var(--space-4) 0 0",
              fontSize: "var(--text-sm)",
              color: "var(--text-tertiary)",
              lineHeight: "var(--leading-relaxed)",
            }}
          >
            International brands, leading venues, and private families who value discretion.
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
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <span id="what-we-do" className="anchor" aria-hidden="true" />
        <div className="editorial">
          <div className="editorial-head">
            <h2 className="sec-title">
              Private <span className="gradient-text">photography and filmmaking</span>
            </h2>
            <p className="sec-sub" style={{ marginTop: "var(--space-6)" }}>
              A professional photography and filmmaking experience, designed around your holiday from
              start to finish.
            </p>
          </div>
          <div className="editorial-img">
            <img
              src={getImageSrc(portfolioMood)}
              alt="Private ski holiday photography in the mountains"
              className="design-img"
              loading="lazy"
              draggable="false"
            />
          </div>
          <div className="pillars">
            {PILLARS.map(([title, body]) => (
              <div key={title} className="pillar">
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-text">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DesignReveal>
  );
}

function Portfolio({ itemsByTab }) {
  const tabs = Object.keys(itemsByTab);
  const [tab, setTab] = useState(tabs[0]);
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
        <div className="sec-head">
          <h2 className="sec-title">
            <span id="portfolio" className="anchor" aria-hidden="true" />
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="sec-sub">A glimpse into the moments we have had the privilege to capture.</p>
        </div>
        <Tabs options={tabs} active={tab} onChange={setTab} ariaLabel="Portfolio category" />
        <div
          className="pfscroll"
          ref={ref}
          tabIndex={0}
          role="region"
          aria-label={`${tab} gallery, scroll horizontally`}
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
          <span>←</span> Drag to explore more <span>→</span>
        </p>
      </section>
    </DesignReveal>
  );
}

function Process() {
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head">
          <h2 className="sec-title">
            Simple process, <span className="gradient-text">unforgettable results.</span>
          </h2>
          <p className="sec-sub">We make it easy from the first message to the final delivery.</p>
        </div>
        <div className="steps">
          {STEPS.map(([n, title, body]) => (
            <div key={n} className="step">
              <span className="step-n">{n}</span>
              <div className="step-body">
                <h3 className="step-title">{title}</h3>
                <p className="step-text">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DesignReveal>
  );
}

function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];
  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            <span id="reviews" className="anchor" aria-hidden="true" />
            What <span className="gradient-text">our clients</span> say
          </h2>
        </div>
        <div className="rvrow">
          <div className="rvsummary">
            <p className="rvsum-label">Excellent</p>
            <Stars n={5} />
            <p className="rvsum-sub">Based on our reviews</p>
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
              READ MORE
            </a>
          </div>
          <div className="rvviewport">
            <div className="rvtrack">
              {doubled.map(([name, stars, date, text], i) => (
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
  const tabs = Object.keys(packages);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            <span id="packages" className="anchor" aria-hidden="true" />
            Choose your <span className="gradient-text">experience</span>
          </h2>
          <p className="sec-sub">
            Whether you are capturing a single day or your entire holiday, each experience is tailored
            to your plans and delivered with the same attention to detail.
          </p>
        </div>
        <Tabs options={tabs} active={tab} onChange={setTab} ariaLabel="Experience type" />
        <div className="pkgrid">
          {(packages[tab] || []).map((pkg) => {
            const title = pkg.title || pkg.name;
            const features = pkg.features || pkg.items || [];
            const action = pkg.ctaLabel || pkg.action || "Book Now";
            return (
              <div key={title} className="pkcard">
                <h3 className="pk-name">{title}</h3>
                <p className="pk-price">
                  {String(pkg.price).startsWith("From") || String(pkg.price).startsWith("Custom")
                    ? pkg.price
                    : `From ${pkg.price}`}
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
  const initial = 4;
  const [open, setOpen] = useState(-1);
  const [all, setAll] = useState(false);
  const shown = all ? FAQS : FAQS.slice(0, initial);

  return (
    <DesignReveal>
      <section className="sec" style={{ padding: "0 0 var(--space-24)" }}>
        <div className="sec-head center">
          <h2 className="sec-title">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <p className="sec-sub">The things families ask us most often before booking.</p>
        </div>
        <div className="faq">
          {shown.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`faq-item${isOpen ? " open" : ""}`}>
                <h3 style={{ margin: 0 }}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="faq-qtext">{q}</span>
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
                  <p className="faq-a">{a}</p>
                </div>
              </div>
            );
          })}
        </div>
        {FAQS.length > initial && !all ? (
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
              VIEW ALL FAQS
            </button>
          </div>
        ) : null}
      </section>
    </DesignReveal>
  );
}

export default function DesignHome() {
  const [portfolio, setPortfolio] = useState(DEFAULT_PORTFOLIO);
  const [packages, setPackages] = useState(DESIGN_PACKAGES);

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
        "Ski Holidays": skiItems.length ? skiItems : DEFAULT_PORTFOLIO["Ski Holidays"],
        "Private Events": eventItems.length
          ? eventItems
          : DEFAULT_PORTFOLIO["Private Events"],
      });

      if (pricing?.tab1?.length || pricing?.tab2?.length) {
        setPackages({
          Ski: pricing.tab1?.length ? pricing.tab1 : DESIGN_PACKAGES.Ski,
          Events: pricing.tab2?.length ? pricing.tab2 : DESIGN_PACKAGES.Events,
        });
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash?.replace(/^#/, "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    requestAnimationFrame(() => {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 24,
        behavior: "smooth",
      });
    });
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
