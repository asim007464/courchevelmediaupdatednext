"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Watsappbtn from "@/components/Watsappbtn";

const ARTICLE = {
  category: "How We Capture It",
  title: "Why overcast days often make better photographs",
  lead: "Soft light, even snow and no harsh shadows. What flat light gives you that bluebird conditions often cannot.",
  minutes: 7,
  location: "Courchevel, France",
  hero: "/Blog/uploads/Screenshot%202026-07-31%20at%2018.28.12.png",
  wide: "/Blog/uploads/Screenshot%202026-07-31%20at%2018.15.37.png",
  gallery: [
    "/Blog/uploads/Screenshot%202026-07-31%20at%2017.48.10.png",
    "/Blog/uploads/Screenshot%202026-07-31%20at%2017.53.44.png",
  ],
  inline: "/Blog/uploads/Screenshot%202026-07-31%20at%2018.35.16.png",
};

export default function BlogArticle() {
  return (
    <div className="page-wrapper blog-page">
      <main className="main-wrapper">
        <Navbar />
        <article className="blog-article">
          <div className="blog-article__inner">
            <nav className="blog-article__crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blogs">Blogs</Link>
              <span aria-hidden="true">/</span>
              <span>{ARTICLE.category}</span>
            </nav>

            <header className="blog-article__header">
              <span className="blog-article__badge">{ARTICLE.category}</span>
              <h1 className="blog-article__title">{ARTICLE.title}</h1>
              <p className="blog-article__lead">{ARTICLE.lead}</p>
              <div className="blog-article__meta">
                <span>{ARTICLE.minutes} MIN READ</span>
                <span className="blog-article__meta-divider" />
                <span>{ARTICLE.location}</span>
              </div>
            </header>

            <div className="blog-article__hero">
              <img src={ARTICLE.hero} alt="Skier in soft alpine light" />
            </div>

            <div className="blog-article__prose">
              <p className="blog-article__intro">
                Most families arrive hoping for a bluebird week. It is the picture
                everyone has in mind: deep blue sky, hard sun, long shadows on fresh
                snow. Yet some of the strongest photographs we deliver each season
                are made on the days nobody photographs on purpose, when the cloud
                sits low over the Saulire and the light goes flat.
              </p>
              <p>
                Flat light is not weak light. It is light that has been spread out,
                and that changes almost everything about how a ski day photographs.
                Faces stop squinting. Snow stops blowing out. The whole mountain
                becomes one large softbox, and we can keep working in any direction
                without waiting for the sun to move.
              </p>

              <h2>What flat light actually does</h2>
              <p>
                On a hard-sun day, the difference in brightness between sunlit snow
                and a face under a helmet is extreme. Something has to give: either
                the snow turns to white paper, or the face falls into shadow. Under
                cloud, that gap narrows to a point where both hold detail in the
                same frame.
              </p>

              <h3>Skin and goggles</h3>
              <p>
                Soft light wraps around a face instead of cutting across it. Goggle
                straps stop casting hard lines, and eyes stay open and relaxed. For
                children, this is often the difference between a natural expression
                and a grimace.
              </p>

              <h3>Snow texture</h3>
              <p>
                Counter-intuitively, gentle light reveals more of the surface. Wind
                lips, ski tracks and the shape of a groomed piste read as texture
                rather than as glare, which is exactly what we want behind a skier
                in motion.
              </p>

              <blockquote className="blog-article__quote">
                The mountain becomes one large softbox. We stop waiting for the
                light and start following the day.
              </blockquote>

              <h2>What we change on a flat-light day</h2>
              <p>
                Conditions shape the plan rather than replacing it. We still follow
                your holiday as it happens, but the route and the shot list shift.
              </p>
              <ol>
                <li>
                  We move higher earlier, where cloud often thins and the light
                  turns luminous rather than grey.
                </li>
                <li>
                  We favour slopes with definition: tree lines, pistes with visible
                  shaping, ridges that give the frame a horizon.
                </li>
                <li>
                  We work closer for portraits, since soft light rewards proximity
                  and detail.
                </li>
                <li>
                  We keep the film sequence tighter, cutting on movement instead of
                  on sweeping landscape shots.
                </li>
              </ol>

              <div className="blog-article__callout">
                <h4>Why overcast light works well</h4>
                <ul>
                  <li>Softer shadows across faces and equipment</li>
                  <li>More even exposure between snow and skin</li>
                  <li>Better consistency while moving between runs</li>
                  <li>
                    More flexibility in filming direction, with no need to chase the
                    sun
                  </li>
                </ul>
              </div>
            </div>

            <figure className="blog-article__figure">
              <img
                src={ARTICLE.wide}
                alt="Skiers traversing a ridge under low cloud"
              />
              <figcaption>
                Cloud at 2,400m, Courchevel. Flat light keeps snow and faces in the
                same exposure.
              </figcaption>
            </figure>

            <div className="blog-article__prose">
              <h2>Where flat light is harder</h2>
              <p>
                It is not a universal advantage. Two situations need care, and both
                are about depth.
              </p>
              <ul>
                <li>
                  Whiteout on open, featureless slopes, where snow and sky merge and
                  a skier loses scale. We solve this by finding a reference in the
                  frame: a pylon, a tree line, a second skier.
                </li>
                <li>
                  Late afternoon in the village, where cloud shortens an already
                  short day. We simply move indoors earlier, into chalet interiors
                  and the first hour of après-ski.
                </li>
              </ul>
              <p>
                Neither costs you the day. It changes the order of it, which is why
                we plan every booking around the forecast rather than against it.
              </p>
            </div>

            <div className="blog-article__gallery">
              {ARTICLE.gallery.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
            <p className="blog-article__caption">
              Portrait and detail from the same hour. Neither frame needed direct
              sun.
            </p>

            <div className="blog-article__prose">
              <h3>A note on film</h3>
              <p>
                For film, consistency matters more than drama. Cloud holds the
                exposure steady between runs, so a two-minute highlight film cuts
                together without the light jumping from shot to shot. On hard-sun
                days we often spend the edit balancing frames that were made twenty
                minutes apart.
              </p>
            </div>

            <figure className="blog-article__figure blog-article__figure--inline">
              <img
                src={ARTICLE.inline}
                alt="Skier photographed from behind in soft light"
              />
              <figcaption>
                Following, not directing. The quiet way we work in any conditions.
              </figcaption>
            </figure>

            <div className="blog-article__prose">
              <p>
                If your week looks grey on the forecast, it is rarely a reason to
                move your date. It is usually a reason to start earlier, go higher,
                and let us photograph the day you are actually having.
              </p>
            </div>

            <div className="blog-article__cta">
              <div>
                <h2>Ready to plan your Courchevel coverage?</h2>
                <p>
                  Tell us your dates and we will shape a quiet, cinematic day around
                  the conditions.
                </p>
              </div>
              <Watsappbtn />
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
