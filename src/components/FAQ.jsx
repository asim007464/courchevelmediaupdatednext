"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";

const FAQ = () => {
  const { t } = useLanguage();
  const faqs = t("faq.items") || [];
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount((count) => count + 5);
  };

  return (
    <section id="faqs" className="section faq-section">
      <div className="padding-section-large padding-section_home-faq">
        <div className="container-medium">
          <div>
            <div className="section-heading">
              <div className="text-color-white">
                <h2 className="heading-style-h2 text-white">
                  {t("faq.title")}{" "}
                  <span className="text-color-gradient">{t("faq.titleGradient")}</span>
                </h2>
              </div>
              {t("faq.subtitle") ? (
                <div className="section-heading_paragraph">
                  <div className="text-weight-medium">
                    <div className="text-size-medium text-[white]">
                      {t("faq.subtitle")}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="padding-top padding-xlarge">
              <div className="home-faq-wrap">
                {faqs.slice(0, visibleCount).map((faq, index) => (
                  <div
                    key={index}
                    className={`card card-faq ${openIndex === index ? "is-open" : ""}`}
                  >
                    <div
                      className="card-faq_heading"
                      onClick={() => handleToggle(index)}
                    >
                      <div className="text-color-white">
                        <div className="text-weight-medium">
                          <div className="text-size-xlarge mobile-text-size-large">
                            {faq.question}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          transform:
                            openIndex === index
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                        className="card-faq_toggle-button"
                      >
                        <div className="svg-icon full w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.5 8.25L12 15.75L4.5 8.25"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-faq_body"
                      style={{
                        display: openIndex === index ? "block" : "none",
                      }}
                    >
                      <div className="card-faq_inner-body">
                        <div className="text-weight-medium">
                          <div className="text-size-medium">{faq.answer}</div>
                        </div>
                      </div>
                    </div>
                    <div className="card_noise"></div>
                  </div>
                ))}
              </div>

              {visibleCount < faqs.length ? (
                <div className="flex justify-center mt-5">
                  <button
                    type="button"
                    className="load-more-button"
                    onClick={handleLoadMore}
                  >
                    See more
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
