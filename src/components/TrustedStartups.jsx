"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageProvider";

const TrustedStartups = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="section">
        <div className="padding-section-small padding-section_home-brand">
          <div>
            <div className="container-medium">
              <div className="text-align-center">
                <div className="text-style-allcaps">
                  <div className="text-weight-bold">
                    <div className="text-[26px] text-[white] font-[800]">
                      {t("trusted.title")}
                    </div>
                  </div>
                </div>

                <div className="text-[18px] mt-3 text-white">
                  {t("trusted.subtitle")}
                </div>
              </div>
            </div>
            <div className="padding-top padding-xlarge">
              <div className="home-brand">
                <div className="flex flex-wrap justify-center gap-[80px] items-center">
                  <div className="  ">
                    <img
                      src="/images/companieslogos/Baies Courchevel.webp"
                      loading="eager"
                      alt=""
                      style={{ width: "160px" }}
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Courchevel Tourisme.webp"
                      loading="eager"
                      alt=""
                      style={{ width: "90px" }}
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Derbike.webp"
                      loading="eager"
                      alt=""
                      style={{ width: "120px" }}
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/LAtelier.webp"
                      loading="eager"
                      alt=""
                      style={{ width: "120px" }}
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Mangeoire Courchevel.webp"
                      loading="eager"
                      alt=""
                      style={{ width: "120px" }}
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Manufacture Alpine.webp"
                      loading="eager"
                      style={{ width: "120px" }}
                      alt=""
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Obermeyer.webp"
                      loading="eager"
                      style={{ width: "120px" }}
                      alt=""
                      className="image-full"
                    />
                  </div>
                  <div>
                    <img
                      src="/images/companieslogos/Red Bull Courchevel.webp"
                      loading="eager"
                      style={{ width: "120px" }}
                      alt=""
                      className="image-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedStartups;
