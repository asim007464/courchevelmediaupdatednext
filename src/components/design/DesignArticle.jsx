"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DesignImage from "@/components/design/DesignImage";
import DesignReveal from "@/components/design/DesignReveal";
import { DesignShell } from "@/components/design/DesignShell";
import { GuideCard, JournalSignup } from "@/components/design/DesignMagazine";
import { designImage } from "@/lib/designImages";
import {
  getGuideBySlug,
  getMagazineGuides,
  relatedGuides,
} from "@/lib/magazine";

const DEFAULT_ARTICLE_BODY = (
  <>
    <div className="prose">
      <p className="intro">
        Most families arrive hoping for a bluebird week. It is the picture everyone has in mind: deep blue
        sky, hard sun, long shadows on fresh snow. Yet some of the strongest photographs we deliver each
        season are made on the days nobody photographs on purpose, when the cloud sits low over the Saulire
        and the light goes flat.
      </p>
      <p>
        Flat light is not weak light. It is light that has been spread out, and that changes almost everything
        about how a ski day photographs. Faces stop squinting. Snow stops blowing out. The whole mountain
        becomes one large softbox, and we can keep working in any direction without waiting for the sun to
        move.
      </p>
      <h2>What flat light actually does</h2>
      <p>
        On a hard-sun day, the difference in brightness between sunlit snow and a face under a helmet is
        extreme. Something has to give: either the snow turns to white paper, or the face falls into shadow.
        Under cloud, that gap narrows to a point where both hold detail in the same frame.
      </p>
      <h3>Skin and goggles</h3>
      <p>
        Soft light wraps around a face instead of cutting across it. Goggle straps stop casting hard lines, and
        eyes stay open and relaxed. For children, this is often the difference between a natural expression and
        a grimace.
      </p>
      <h3>Snow texture</h3>
      <p>
        Counter-intuitively, gentle light reveals more of the surface. Wind lips, ski tracks and the shape of a
        groomed piste read as texture rather than as glare, which is exactly what we want behind a skier in
        motion.
      </p>
      <div className="pullquote">
        <p>
          The mountain becomes one large softbox. We stop waiting for the light and start following the day.
        </p>
      </div>
      <h2>What we change on a flat-light day</h2>
      <p>
        Conditions shape the plan rather than replacing it. We still follow your holiday as it happens, but the
        route and the shot list shift.
      </p>
      <ol>
        <li>We move higher earlier, where cloud often thins and the light turns luminous rather than grey.</li>
        <li>
          We favour slopes with definition: tree lines, pistes with visible shaping, ridges that give the frame
          a horizon.
        </li>
        <li>We work closer for portraits, since soft light rewards proximity and detail.</li>
        <li>We keep the film sequence tighter, cutting on movement instead of on sweeping landscape shots.</li>
      </ol>
      <div className="callout">
        <h4>Why overcast light works well</h4>
        <ul>
          <li>Softer shadows across faces and equipment</li>
          <li>More even exposure between snow and skin</li>
          <li>Better consistency while moving between runs</li>
          <li>More flexibility in filming direction, with no need to chase the sun</li>
        </ul>
      </div>
    </div>
    <figure className="figwide">
      <div className="imgframe">
        <DesignImage slot="article-wide-1" alt="Skiers under low cloud" />
      </div>
      <figcaption className="caption">
        Cloud at 2,400m, Courchevel. Flat light keeps snow and faces in the same exposure.
      </figcaption>
    </figure>
    <div className="prose">
      <h2>Where flat light is harder</h2>
      <p>It is not a universal advantage. Two situations need care, and both are about depth.</p>
      <ul>
        <li>
          Whiteout on open, featureless slopes, where snow and sky merge and a skier loses scale. We solve this
          by finding a reference in the frame: a pylon, a tree line, a second skier.
        </li>
        <li>
          Late afternoon in the village, where cloud shortens an already short day. We simply move indoors
          earlier, into chalet interiors and the first hour of après-ski.
        </li>
      </ul>
      <p>
        Neither costs you the day. It changes the order of it, which is why we plan every booking around the
        forecast rather than against it.
      </p>
    </div>
    <figure className="figwide">
      <div className="gallery2">
        <div className="imgframe tall">
          <DesignImage slot="article-gal-1" alt="Portrait in soft light" />
        </div>
        <div className="imgframe tall">
          <DesignImage slot="article-gal-2" alt="Detail of ski boot" />
        </div>
      </div>
      <figcaption className="caption">
        Portrait and detail from the same hour. Neither frame needed direct sun.
      </figcaption>
    </figure>
    <div className="prose">
      <h3>A note on film</h3>
      <p>
        For film, consistency matters more than drama. Cloud holds the exposure steady between runs, so a
        two-minute highlight film cuts together without the light jumping from shot to shot.
      </p>
    </div>
    <figure className="figinline">
      <div className="imgframe">
        <DesignImage slot="article-inline-1" alt="Skier photographed from behind" />
      </div>
      <figcaption className="caption">Following, not directing. The quiet way we work in any conditions.</figcaption>
    </figure>
    <div className="prose">
      <p>
        If your week looks grey on the forecast, it is rarely a reason to move your date. It is usually a reason
        to start earlier, go higher, and let us photograph the day you are actually having.
      </p>
    </div>
  </>
);

function renderRichContent(content) {
  if (!content) return null;
  if (content.includes("<")) {
    return <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />;
  }
  return (
    <div className="prose">
      {content.split(/\n\n+/).map((para) => (
        <p key={para.slice(0, 24)}>{para}</p>
      ))}
    </div>
  );
}

export default function DesignArticle({ slug }) {
  const [guide, setGuide] = useState(null);
  const [related, setRelated] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let alive = true;
    Promise.all([getGuideBySlug(slug), getMagazineGuides()]).then(([found, guides]) => {
      if (!alive) return;
      if (!found) {
        setStatus("missing");
        return;
      }
      setGuide(found);
      setRelated(relatedGuides(found.slug, guides));
      setStatus("ready");
    });
    return () => {
      alive = false;
    };
  }, [slug]);

  if (status === "loading") {
    return (
      <DesignShell active="Magazine">
        <p style={{ padding: "var(--space-24) 0", color: "var(--text-tertiary)" }}>Loading article…</p>
      </DesignShell>
    );
  }

  if (status === "missing" || !guide) {
    return (
      <DesignShell active="Magazine">
        <section style={{ padding: "var(--space-24) 0" }}>
          <h1 className="art-title">Article not found</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            <Link href="/magazine">Back to Magazine</Link>
          </p>
        </section>
      </DesignShell>
    );
  }

  const body = guide.content ? renderRichContent(guide.content) : DEFAULT_ARTICLE_BODY;

  return (
    <DesignShell active="Magazine">
      <article>
        <header>
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/magazine">Magazine</Link>
            <span aria-hidden="true">/</span>
            <Link href="/magazine">{guide.category}</Link>
          </nav>
          <div className="art-head">
            <span className="badge-accent">{guide.category}</span>
            <h1 className="art-title">{guide.title}</h1>
            <p className="art-lead">{guide.lead || guide.description}</p>
            <div className="art-meta">
              <span>{guide.minutes} MIN READ</span>
              <span style={{ width: 1, height: 12, background: "var(--border-default)" }} />
              <span>COURCHEVEL, FRANCE</span>
            </div>
          </div>
          <div className="art-hero-img">
            <img
              src={guide.cover || designImage("article-hero")}
              alt=""
              className="design-img"
            />
          </div>
        </header>
        {body}
      </article>

      <DesignReveal>
        <section className="related" style={{ paddingTop: "var(--space-32, 128px)" }}>
          <div
            style={{
              borderTop: "1px solid var(--border-subtle)",
              paddingTop: "var(--space-6)",
              marginBottom: "var(--space-10)",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "var(--text-2xl)",
                fontWeight: "var(--weight-bold)",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              Continue exploring
            </h2>
          </div>
          <div className="grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/magazine/${item.slug}`} className="cardlink">
                <GuideCard guide={item} />
              </Link>
            ))}
          </div>
        </section>
      </DesignReveal>

      <DesignReveal>
        <JournalSignup />
      </DesignReveal>
    </DesignShell>
  );
}
