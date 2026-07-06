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
      <section id="pricing" className="section">
        <div className="padding-section-large padding-section_home-pricing">
          <div className="px-[20px]">
            <div>
              <div className="section-heading">
                <div className="text-color-white">
                  <h2 className="heading-style-h2 text-white">
                    {t("pricing.title")}
                    <span className="text-color-gradient">
                      {t("pricing.titleGradient")}
                    </span>
                  </h2>
                </div>
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
                  <div style={{ color: "white" }}>{t("common.ski")}</div>
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
                    {t("common.events")}
                  </div>
                </a>
              </div>
              <div className="padding-top mt-[40px]">
                <div
                  className="grid gap-[30px] mx-auto max-w-[1600px]
  [grid-template-columns:repeat(auto-fit,minmax(300px,max-content))] justify-center"
                >
                  {(data[activeTab] || []).map((option, index) => (
                    <div
                      key={`${activeTab}-${option.title}-${index}`}
                      className="card card-pricing max-w-[500px]"
                    >
                      <div className="card-pricing_heading">
                        <div className="text-weight-medium">
                          <div>{option.title}</div>
                        </div>
                        <div className="text-style-allcaps flex items-center">
                          <div className="text-[16px] mr-2 !normal-case">
                            {t("pricing.from")}
                          </div>
                          <h4 className="heading-style-h4">
                            <del>{option.discount && option.discount}</del>{" "}
                            {option.price}
                          </h4>
                        </div>
                        <div className="text-weight-medium">
                          <div className="text-size-medium">
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
                            <div className="card-pricing_list-icon">
                              <div className="svg-icon full w-embed rounded-full bg-[#0074ec]">
                                <i className="fa-solid fa-check text-white text-[15px]"></i>
                              </div>
                            </div>
                            <div className="card-why_list-text">
                              <div className="text-weight-medium">{feature}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="card-pricing_cta">
                        <div className="card-pricing_cta flex justify-center">
                          <button
                            humblytics="pricing-25s_button"
                            onClick={() => sendMessageToWhatsApp(option)}
                            className="buttoninsta w-button"
                          >
                            {t("pricing.bookNow")}
                          </button>
                        </div>
                      </div>
                      {activeTab === "Tab 1" && index === 1 ? (
                        <div>
                          <div className="card-pricing_bg"></div>
                          <div className="card-pricing_label">
                            <div className="text-color-white">
                              <div className="text-weight-bold">
                                <div className="text-style-allcaps">
                                  <div className="text-size-tiny">
                                    {t("pricing.mostPopular")}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      <div className="card_noise"></div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-[13px] md:text-[14px] w-full mt-8">
                  {t("pricing.availabilityNote")}
                </div>
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
