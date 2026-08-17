"use client";

import DesignReveal from "@/components/design/DesignReveal";
import DesignCta from "@/components/design/DesignCta";
import { DesignShell } from "@/components/design/DesignShell";

const NOTICED = [
  [
    "You forget there's a camera.",
    "Nothing is staged or repeated. Moments happen naturally, and they're captured that way.",
  ],
  [
    "We adapt to your plans.",
    "Your holiday comes first and the photography follows. Never the other way around.",
  ],
  [
    "We ski beside you.",
    "No waiting, no catching up, no stopping every few minutes for another photograph.",
  ],
  [
    "Conversation when you want it.",
    "Some clients become friends over the years. Others simply enjoy complete privacy. Both feel equally natural.",
  ],
];

export default function DesignAbout() {
  return (
    <DesignShell>
      <section className="ab-hero">
        <p className="eyebrow">About Courchevel Media</p>
        <div className="ab-hero-grid">
          <h1 className="ab-hero-h">
            We built a better way to experience and{" "}
            <span className="gradient-text">remember a ski holiday.</span>
          </h1>
          <p className="ab-hero-p">
            Courchevel Media exists because the best moments of your holiday shouldn&apos;t stop for the
            camera.
          </p>
        </div>
      </section>

      <figure className="ab-bleed">
        <img
          src="/homepageimgs/courchevel-mountains-winter-sunset.webp"
          alt="Snow-covered mountains in Courchevel during winter at sunset."
          className="design-img"
          loading="eager"
          draggable="false"
        />
      </figure>

      <DesignReveal>
        <section className="sec">
          <div className="ab-spread">
            <figure className="ab-spread-img">
              <img
                src="/homepageimgs/kevin-oliveri-filmmaker-production.webp"
                alt="Courchevel Media founder Kevin Olivieri working on an action sports film production."
                className="design-img"
                loading="lazy"
                draggable="false"
              />
            </figure>
            <div className="ab-spread-copy">
              <p className="ab-tagline">
                <span>Kevin Oliveri</span>
                <span className="ab-tagline-role">Founder</span>
              </p>
              <h2 className="ab-h2">The project worth building.</h2>
              <p className="ab-body">
                Long before Courchevel Media existed, Kevin had already spent years directing commercial
                productions for international brands, athletes, adventure expeditions, festivals and major
                events. It was during those years that his approach was shaped: thoughtful planning, calm
                execution and an attention to detail that most people never notice. Today, those same
                standards define every project, whether it is a commercial campaign, a family ski holiday or
                a private celebration.
              </p>
              <p className="ab-body">
                Courchevel did not change the way Kevin worked. It changed where he applied those standards.
                The same care, preparation and storytelling that defined commercial productions became the
                foundation for documenting family holidays in a more natural, personal way.
              </p>
            </div>
          </div>
          <p className="ab-aside">
            What started as a side project <span className="ab-aside-em">became a true passion project.</span>
          </p>
        </section>
      </DesignReveal>

      <DesignReveal>
        <section className="sec">
          <figure className="ab-bleed ab-bleed-tall">
            <img
              src="/homepageimgs/courchevel-media-ski-holiday-behind-the-scenes.webp"
              alt="Courchevel Media photographer riding a chairlift with clients during a ski holiday in Courchevel."
              className="design-img"
              loading="lazy"
              draggable="false"
            />
          </figure>
          <div className="ab-note-block">
            <p className="eyebrow">The idea</p>
            <h2 className="ab-note-h">Every decision started with one question.</h2>
            <p className="ab-note-q">
              How do you preserve a week that families and friends spend together, without standing in the
              middle of it?
            </p>
            <div className="ab-cols ab-cols-center">
              <div>
                <p className="ab-body">
                  The challenge was never making beautiful photographs. It was documenting genuine moments
                  while leaving the holiday completely alone. Traditional coverage does the opposite: the
                  group skis ahead, the photographer waits below, everyone stops, regroups, and starts again.
                </p>
              </div>
              <div>
                <p className="ab-body">
                  So the experience was redesigned around that question instead of around the camera. The only
                  way to truly document a day was to become part of it, which meant learning to ski. One season
                  later Kevin was photographing clients while skiing beside them. That decision now defines
                  every booking: the group never has to stop for the camera, because the camera moves with the
                  group.
                </p>
              </div>
            </div>
          </div>
        </section>
      </DesignReveal>

      <DesignReveal>
        <section className="sec">
          <div className="ab-noticed-head">
            <h2 className="ab-h2">What clients notice.</h2>
            <p className="ab-body">
              These aren&apos;t company values. They&apos;re the things people tend to mention after spending a
              week with us.
            </p>
          </div>
          <div className="ab-rows">
            {NOTICED.map(([title, body], i) => (
              <div key={title} className="ab-row">
                <span className="ab-row-n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ab-row-t">{title}</h3>
                <p className="ab-row-b">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </DesignReveal>

      <DesignReveal>
        <section className="sec">
          <div className="ab-lifestyle">
            <div className="ab-lifestyle-copy">
              <h2 className="ab-h2">More than photographs.</h2>
              <p className="ab-body">
                One piece of feedback appears again and again: booking felt easier after meeting Kevin.
              </p>
              <p className="ab-body">
                Some clients appreciate having someone who keeps the energy up through the day. Others value
                that he knows exactly when to disappear into the background. Both matter equally.
              </p>
            </div>
            <figure className="ab-lifestyle-img">
              <img
                src="/homepageimgs/courchevel-media-client-experience-apres-ski.webp"
                alt="Courchevel Media photographer with clients during an après-ski afternoon in Courchevel."
                className="design-img"
                loading="lazy"
                draggable="false"
              />
            </figure>
          </div>
        </section>
      </DesignReveal>

      <DesignReveal>
        <section className="sec">
          <figure className="ab-bleed ab-bleed-tall">
            <img
              src="/homepageimgs/courchevel-media-private-wedding.webp"
              alt="Courchevel Media filming a private mountain wedding in Courchevel"
              className="design-img"
              loading="lazy"
              draggable="false"
            />
          </figure>
          <div className="ab-today">
            <h2 className="ab-h2 ab-h2-center">Courchevel Media today.</h2>
            <p className="ab-body">
              Today Courchevel Media documents ski holidays, proposals, private celebrations and commercial
              productions across Courchevel and the Trois Vallées. When a project requires it, trusted
              collaborators join the production.
            </p>
            <p className="ab-body">
              What never changes is the intention behind every project: to preserve the feeling of the day as
              naturally as it happened. The photographs matter. The memories they bring back matter even more.
            </p>
          </div>
        </section>
      </DesignReveal>

      <DesignReveal>
        <DesignCta
          title={
            <>
              Ready to make this <span className="gradient-text">part of your holiday?</span>
            </>
          }
          body="Availability is limited throughout the winter season. If our approach feels right for your family, we'd love to hear about your trip."
          secondaryHref="/#portfolio"
          secondaryLabel="VIEW PORTFOLIO"
          secondaryExternal={false}
        />
      </DesignReveal>
    </DesignShell>
  );
}
