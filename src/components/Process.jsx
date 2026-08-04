"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageProvider";

const Process = () => {
  const { t } = useLanguage();
  const steps = t("process.steps") || [];

  return (
    <section id="process" className="section process-section-wrap">
      <div className="padding-section-large padding-section_home-hiw">
        <div className="container-medium">
          <div className="process-section">
            <div className="process-section__heading">
              <h2 className="heading-style-h2 text-white">
                {t("process.title")}
                <span className="text-color-gradient"> {t("process.titleGradient")}</span>
              </h2>
              <p className="process-section__subtitle">{t("process.subtitle")}</p>
            </div>

            <div className="process-section__steps">
              {steps.map((step, index) => (
                <div key={step.title || index} className="process-section__step">
                  <div className="process-section__step-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="process-section__step-content">
                    <h3 className="process-section__step-title">{step.title}</h3>
                    <p className="process-section__step-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
