"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageProvider";
import solutionImage from "@/images/Computer/Ski/Robert Horwitz - USA/9.webp";
import { getImageSrc } from "@/lib/getImageSrc";

const TheSolution = () => {
  const { t } = useLanguage();
  const cards = t("solution.cards") || [];

  return (
    <section id="service" className="section solution-section">
      <div className="padding-section-large padding-section_home-intro">
        <div className="container-medium">
          <div className="solution-section__layout">
            <div className="solution-section__content">
              <div className="solution-section__heading">
                <h2 className="heading-style-h2 text-white">
                  {t("solution.title")}
                  <span className="text-color-gradient"> {t("solution.titleGradient")}</span>
                </h2>
                <p className="solution-section__subtitle">{t("solution.subtitle")}</p>
              </div>
              <div className="solution-section__pillars">
                {cards.map((card, index) => (
                  <article key={card.title || index} className="solution-section__pillar">
                    <h3 className="solution-section__pillar-title">{card.title}</h3>
                    <p className="solution-section__pillar-text">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="solution-section__media">
              <img
                src={getImageSrc(solutionImage)}
                alt="Private ski holiday photography in the mountains"
                className="solution-section__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
