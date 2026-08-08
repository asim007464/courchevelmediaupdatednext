"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import DesignReveal from "@/components/design/DesignReveal";
import { DesignShell } from "@/components/design/DesignShell";
import {
  getFeaturedGuide,
  getMagazineGuides,
  mapDesignGuide,
} from "@/lib/magazine";
import { FEATURED_GUIDE } from "@/lib/designImages";

const CATEGORIES = [
  "All",
  "Behind the Scenes",
  "Planning Your Experience",
  "How We Capture It",
  "Experiences",
  "Magazine",
];

const JOURNAL_ITEMS = [
  "New magazine stories",
  "Local recommendations and hidden gems",
  "Seasonal planning guides",
  "Behind the scenes productions",
  "Early season updates",
];

function GuideCard({ guide }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        border: "1px solid var(--border-subtle)",
        background: "var(--surface-raised)",
        height: "100%",
      }}
    >
      <div className="slotwrap">
        <img src={guide.cover} alt="" className="design-img" />
      </div>
      <div
        style={{
          padding: "var(--space-5)",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        <span className="badge-accent">{guide.category}</span>
        <h4
          style={{
            margin: 0,
            fontSize: "var(--text-md)",
            fontWeight: "var(--weight-semibold)",
            lineHeight: "var(--leading-snug)",
            color: "var(--text-primary)",
          }}
        >
          {guide.title}
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-normal)",
            textWrap: "pretty",
          }}
        >
          {guide.description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "var(--space-4)",
          }}
        >
          <span
            style={{
              fontSize: "var(--text-xs)",
              letterSpacing: "var(--tracking-wider)",
              color: "var(--text-tertiary)",
            }}
          >
            {guide.minutes} MIN READ
          </span>
        </div>
      </div>
    </div>
  );
}

function JournalSignup() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="sec">
      <div className="jn-object">
        <div className="jn-head">
          <p className="eyebrow">The Courchevel Journal</p>
          <h2 className="jn-h">Discover a side of Courchevel few ever experience.</h2>
          <p className="jn-p">
            A quiet collection of stories, local discoveries, seasonal insights and behind the scenes
            productions from the people who spend every winter documenting Courchevel.
          </p>
        </div>
        <div className="jn-inside">
          <p className="jn-inside-label">Inside every issue</p>
          <ul className="jn-list">
            {JOURNAL_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="jn-join">
          {done ? (
            <p className="jn-done" role="status">
              Thank you. You are on the list, and the next Journal will find you.
            </p>
          ) : (
            <form
              className="jn-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
            >
              <div className="jn-row">
                <input
                  id="jn-email"
                  className="jn-input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  aria-label="Your email address"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="ds-btn ds-btn--primary"
                  style={{
                    borderRadius: "var(--radius-md)",
                    background: "var(--white-1)",
                    color: "var(--black-1)",
                    fontSize: "var(--text-base)",
                    padding: "13px 24px",
                    fontWeight: "var(--weight-medium)",
                    letterSpacing: "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  Join the Journal
                </button>
              </div>
            </form>
          )}
          <p className="jn-note">
            By joining the Journal, you agree to our <Link href="/Privacy">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function DesignMagazine() {
  const step = useMemo(() => (typeof window !== "undefined" && window.matchMedia("(max-width:720px)").matches ? 4 : 6), []);
  const [guides, setGuides] = useState([]);
  const [featured, setFeatured] = useState(mapDesignGuide(FEATURED_GUIDE));
  const [active, setActive] = useState("All");
  const [limit, setLimit] = useState(6);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    getMagazineGuides().then(async (list) => {
      if (!alive) return;
      setGuides(list);
      setFeatured(await getFeaturedGuide(list));
      setReady(true);
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    setLimit(typeof window !== "undefined" && window.matchMedia("(max-width:720px)").matches ? 4 : 6);
  }, []);

  const filtered =
    active === "All" ? guides : guides.filter((g) => g.category === active);
  const shown = filtered.slice(0, limit);

  return (
    <DesignShell active="Magazine">
      <section className="hero" style={{ padding: "var(--space-24) 0 var(--space-20)", maxWidth: 820 }}>
        <p className="eyebrow" style={{ marginBottom: "var(--space-6)" }}>
          Magazine
        </p>
        <h1
          className="hero-h1"
          style={{
            margin: 0,
            fontSize: "var(--text-4xl)",
            fontWeight: "var(--weight-bold)",
            letterSpacing: "var(--tracking-tight)",
            lineHeight: "var(--leading-tight)",
          }}
        >
          What we have learned photographing Courchevel,{" "}
          <span className="gradient-text">written down.</span>
        </h1>
        <p
          style={{
            margin: "var(--space-6) 0 0",
            maxWidth: 620,
            fontSize: "var(--text-md)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-relaxed)",
            textWrap: "pretty",
          }}
        >
          Notes on planning a holiday worth remembering, and on how we film it, from seasons spent working
          quietly on these mountains.
        </p>
      </section>

      <DesignReveal>
        <section style={{ padding: "0 0 var(--space-24)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "var(--space-6)",
              marginBottom: "var(--space-6)",
            }}
          >
            <p className="eyebrow">Selected article</p>
          </div>
          <Link href={`/magazine/${featured.slug}`} className="cardlink feature">
            <div className="feature-thumb" style={{ minHeight: 460, position: "relative" }}>
              <img src={featured.cover} alt="" className="design-img" />
            </div>
            <div
              className="feature-copy"
              style={{
                padding: "var(--space-12) var(--space-12) var(--space-12) var(--space-4)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-5)",
              }}
            >
              <span className="badge-accent">{featured.category}</span>
              <h2
                className="feature-title"
                style={{
                  margin: 0,
                  fontSize: "var(--text-2xl)",
                  fontWeight: "var(--weight-bold)",
                  lineHeight: "var(--leading-snug)",
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--text-primary)",
                }}
              >
                {featured.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "var(--text-base)",
                  color: "var(--text-secondary)",
                  lineHeight: "var(--leading-relaxed)",
                  textWrap: "pretty",
                }}
              >
                {featured.description}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tracking-wider)",
                    color: "var(--text-tertiary)",
                  }}
                >
                  {featured.minutes} MIN READ
                </span>
                <span style={{ width: 1, height: 12, background: "var(--border-default)" }} />
                <span style={{ fontSize: "var(--text-sm)", color: "var(--text-primary)" }}>Read the article</span>
              </div>
            </div>
          </Link>
        </section>
      </DesignReveal>

      <DesignReveal>
        <section style={{ padding: "0 0 var(--space-24)" }}>
          <div
            className="filterbar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-6)",
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "var(--space-6)",
              marginBottom: "var(--space-10)",
              flexWrap: "wrap",
            }}
          >
            <div className="pillrow" style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="pill"
                  aria-pressed={c === active}
                  onClick={() => {
                    setActive(c);
                    setLimit(step || 6);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <span
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
              }}
            >
              {ready ? `${filtered.length} ${filtered.length === 1 ? "Article" : "Articles"}` : "…"}
            </span>
          </div>

          <div className="grid">
            {shown.map((guide) => (
              <Link key={guide.slug} href={`/magazine/${guide.slug}`} className="cardlink">
                <GuideCard guide={guide} />
              </Link>
            ))}
          </div>

          {shown.length < filtered.length ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--space-4)",
                marginTop: "var(--space-12)",
              }}
            >
              <button
                type="button"
                className="ds-btn ds-btn--secondary"
                onClick={() => setLimit((l) => l + (step || 6))}
              >
                LOAD MORE
              </button>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--tracking-wider)",
                  textTransform: "uppercase",
                  color: "var(--text-disabled)",
                }}
              >
                Showing {shown.length} of {filtered.length}
              </span>
            </div>
          ) : null}
        </section>
      </DesignReveal>

      <DesignReveal>
        <JournalSignup />
      </DesignReveal>
    </DesignShell>
  );
}

export { JournalSignup, GuideCard };
