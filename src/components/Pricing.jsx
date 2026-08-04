"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";

const Pricing = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Tab 1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const packages = t("pricing.packages") || {};
  const data = {
    "Tab 1": packages.tab1 || [],
    "Tab 2": packages.tab2 || [],
    "Tab 3": packages.tab3 || [],
  };

  const sendMessageToWhatsApp = (packageDetails) => {
    const phoneNumber = "+33784534489";
    const message = encodeURIComponent(
      `Hi, I'm interested in the following package:\n\n` +
        `*Title:* ${packageDetails.title}\n` +
        `*Price:* ${packageDetails.price}\n` +
        `*Description:* ${packageDetails.description}\n` +
        `*Features:* ${packageDetails.features.join(", ")}`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <section id="pricing" className="section pricing-section">
        <div className="padding-section-large padding-section_home-pricing">
          <div className="pricing-section__inner">
            <div>
              <div className="section-heading">
                <div className="text-color-white">
                  <h2 className="heading-style-h2 text-white">
                    {t("pricing.title")}
                    <span className="text-color-gradient">
                      {" "}
                      {t("pricing.titleGradient")}
                    </span>
                  </h2>
                </div>
                {t("pricing.subtitle") ? (
                  <div className="section-heading_paragraph">
                    <div className="text-weight-medium">
                      <div className="text-size-medium text-[white]">
                        {t("pricing.subtitle")}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="video-tabs_menu hidden-scrollbar w-tab-menu">
                <a
                  data-w-tab="Tab 1"
                  onClick={() => handleTabClick("Tab 1")}
                  className={`video-tabs_tab-link w-inline-block w-tab-link ${
                    activeTab === "Tab 1" ? "w--current" : ""
                  }`}
                >
                  <div className="svg-icon _1x1 w-embed">
                    <i
                      className="fa-solid fa-person-skiing"
                      style={{ color: "white" }}
                    ></i>
                  </div>
                  <div style={{ color: "white" }}>{t("pricing.tabs.ski")}</div>
                </a>
                <a
                  onClick={() => handleTabClick("Tab 2")}
                  data-w-tab="Tab 2"
                  className={`video-tabs_tab-link w-inline-block w-tab-link ${
                    activeTab === "Tab 2" ? "w--current" : ""
                  }`}
                >
                  <div className="svg-icon _1x1 w-embed">
                    <i
                      className="fa-solid fa-champagne-glasses"
                      style={{ color: "white" }}
                    ></i>
                  </div>
                  <div style={{ color: "white" }}>
                    {t("pricing.tabs.events")}
                  </div>
                </a>
              </div>
              <div className="padding-top mt-[40px]">
                <div className="pricing-section__grid">
                  {(data[activeTab] || []).map((option, index) => (
                    <div
                      key={`${activeTab}-${option.title}-${index}`}
                      className="pricing-card card card-pricing"
                    >
                      <div className="card-pricing_heading">
                        <div className="text-weight-medium">
                          <div className="pricing-card__title">{option.title}</div>
                        </div>
                        <div className="pricing-card__price-line">
                          {t("pricing.from")} {option.price}
                        </div>
                        <div className="text-weight-medium">
                          <div className="text-size-medium pricing-card__description">
                            {option.description}
                          </div>
                        </div>
                      </div>
                      <div className="card-pricing_content">
                        {option.features.map((feature, idx) => (
                          <div
                            className="card-pricing_list"
                            key={`${option.title}-feature-${idx}`}
                          >
                            <div className="pricing-card__bullet" aria-hidden="true"></div>
                            <div className="card-why_list-text">
                              <div className="text-weight-medium pricing-card__feature">{feature}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="card-pricing_cta">
                        <div className="card-pricing_cta flex justify-center">
                          <button
                            humblytics="pricing-25s_button"
                            onClick={() => sendMessageToWhatsApp(option)}
                            className={`buttoninsta w-button pricing-card__button ${
                              option.ctaLabel ? "pricing-card__button--secondary" : ""
                            }`}
                          >
                            {option.ctaLabel || t("pricing.bookNow")}
                          </button>
                        </div>
                      </div>
                      <div className="card_noise"></div>
                    </div>
                  ))}
                </div>
                {t("pricing.availabilityNote") ? (
                  <div className="text-center text-[13px] md:text-[14px] w-full mt-8">
                    {t("pricing.availabilityNote")}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="home-pricing_ornament"></div>
      </section>
    </>
  );
};

export default Pricing;
