"use client";

import React from "react";
import Watsappbtn from "./Watsappbtn";
import { useLanguage } from "@/context/LanguageProvider";

const ReadySection = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section">
        <div className="padding-section-xsmall">
          <div className="container-large">
            <div className="card card-cta">
              <div className=" flex flex-col justify-center items-center">
                <img
                  src="/images/reallogoofwebsite.webp"
                  loading="lazy"
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                  className=""
                />
                <span className="">Courchevel Media</span>
              </div>
              <div className="card-cta_title">
                <div className="section-heading">
                  <div className="text-color-white">
                    <h2 className="heading-style-h2">
                      {t("ready.title")}
                      <span className="text-color-gradient">
                        {t("ready.titleGradient")}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-weight-medium">
                  <div className="text-size-medium">{t("ready.text")}</div>
                </div>
              </div>
              <div className="card-cta_button-wrap flex justify-center gap-4">
                <a
                  humblytics="home-hero_button"
                  target="_blank"
                  href="https://www.instagram.com/courchevelmedia"
                  className="buttoninsta  w-button flex items-center "
                >
                  <i className="fa-brands mr-1.5 text-[24px] relative fa-instagram"></i>{" "}
                  <span> {t("hero.instagram")}</span>
                </a>
                <Watsappbtn />
              </div>

              <div className="card-cta_bg"></div>
              <div className="card_noise"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadySection;
