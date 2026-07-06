"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageProvider";

const TheSolution = () => {
  const { t } = useLanguage();
  const cards = t("solution.cards") || [];

  return (
    <>
      <section id="service" className="section">
        <div className="padding-section-large padding-section_home-intro">
          <div className="container-medium">
            <div>
              <div className="text-align-center">
                <div className="text-color-white">
                  <h2 className="heading-style-h2 text-white">
                    {t("solution.title")}
                    <span
                      className="text-color-gradient"
                      style={{ marginLeft: "20px" }}
                    >
                      {t("solution.titleGradient")}
                    </span>
                  </h2>
                </div>
                <div>
                  <div className="text-size-large mt-5 text-white">
                    {t("solution.subtitle")}
                  </div>
                </div>
              </div>
              <div className="padding-top padding-xlarge">
                <div className="home-intro-grid">
                  <div
                    id="w-node-d7e66785-3c84-355f-a61f-27539858565e-c351197a"
                    className="card card-solution"
                  >
                    <div className="card-solution_content-wrap item-1">
                      <div className="text-color-white">
                        <h6 className="heading-style-h6">
                          {cards[0]?.title}
                        </h6>
                      </div>
                      <div>
                        <div>
                          {cards[0]?.text}
                        </div>
                      </div>
                    </div>
                    <div className="card_noise"></div>
                    <div className="card-solution_image-1">
                      <img
                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e89dc4b095f92b92189f5_card-solution_image-1-a.webp"
                        loading="eager"
                        sizes="(max-width: 479px) 81vw, (max-width: 767px) 302.0055847167969px, (max-width: 991px) 44vw, 440.6483154296875px"
                        srcSet="
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dc4b095f92b92189f5_card-solution_image-1-a-p-500.png 500w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dc4b095f92b92189f5_card-solution_image-1-a.webp      612w
                          "
                        alt=""
                        className="image-full _w-auto h-auto-mobile-portrait"
                      />
                    </div>
                    <div className="card-solution_image-1-gradient">
                      {/* <img
                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e89dd04538505c17c9764_card-solution_image-1-b.webp"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, 633.978515625px"
                        srcSet="
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dd04538505c17c9764_card-solution_image-1-b-p-500.png   500w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dd04538505c17c9764_card-solution_image-1-b-p-800.png   800w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dd04538505c17c9764_card-solution_image-1-b-p-1080.png 1080w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/659e89dd04538505c17c9764_card-solution_image-1-b.webp       1307w
                          "
                        alt=""
                        className="image-full h-auto"
                      /> */}
                    </div>
                  </div>
                  <div
                    id="w-node-_4b953d62-a867-fae0-b5c9-7f050dadc4c5-c351197a"
                    className="card card-solution last-tablet"
                  >
                    <div className="card-solution_content-wrap item-2">
                      <div className="text-color-white">
                        <h6 className="heading-style-h6">
                          {cards[1]?.title}
                        </h6>
                      </div>
                      <div>
                        <div>
                          {cards[1]?.text}
                        </div>
                      </div>
                    </div>
                    <div className="card_noise"></div>
                    <div className="card-solution_image-2">
                      {/* <img
                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/6598339ab0ec681edfdb7a95_card-solution_image-2-a.webp"
                        loading="eager"
                        sizes="(max-width: 479px) 72vw, (max-width: 767px) 276.5858154296875px, (max-width: 991px) 36vw, 7vw"
                        srcSet="
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339ab0ec681edfdb7a95_card-solution_image-2-a-p-500.png 500w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339ab0ec681edfdb7a95_card-solution_image-2-a.webp      704w
                          "
                        alt=""
                        className="image-full h-auto card-solution_image-3-img"
                      /> */}
                      <img
                        src="/images/Escudoweb.webp"
                        loading="eager"
                        sizes="(max-width: 479px) 72vw, (max-width: 767px) 276.5858154296875px, (max-width: 991px) 36vw, 7vw"
                        alt=""
                        className="image-full h-auto relative max-w-[140px] left-[20%] md:left-0  md:max-w-[350px] top-[10px] md:top-[-20px] card-solution_image-3-img"
                      />
                    </div>
                    <div className="card-solution_image-2-gradient">
                      {/* <img
                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/6598339a45306fab3653447b_card-solution_image-2-b.webp"
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 84vw, 7vw"
                        srcSet="
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339a45306fab3653447b_card-solution_image-2-b-p-500.png 500w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339a45306fab3653447b_card-solution_image-2-b.webp      705w
                          "
                        alt=""
                        className="image-full h-auto"
                      /> */}
                    </div>
                  </div>
                  <div
                    id="w-node-ff3f6022-e12b-a9cb-9898-46b884bdfb07-c351197a"
                    className="card card-solution"
                  >
                    <div className="card-solution_content-wrap item-3">
                      <div className="text-color-white">
                        <h6 className="heading-style-h6">
                          {cards[2]?.title}
                        </h6>
                      </div>
                      <div>
                        <div>
                          {cards[2]?.text}
                        </div>
                      </div>
                    </div>
                    <div className="card_noise"></div>
                    <div className="card-solution_image-3">
                      <img
                        className="  max-[420px]:max-w-[200px] max-w-[220px] max-[480px]:absolute max-[480px]:left-[60px] max-[420px]:bottom-[-30px] max-[480px]:bottom-[-40px]"
                        src="/images/Drone.webp"
                        alt=""
                      />
                      {/* <img
                        src=""
                        loading="eager"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 373.22760009765625px, (max-width: 991px) 58vw, 574.650146484375px"
                        srcSet="
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339a45306fab3653447b_card-solution_image-2-b-p-500.png 500w,
                            https://assets-global.website-files.com/659602a8a781e80b03a8096b/6598339a45306fab3653447b_card-solution_image-2-b.webp      705w
                          "
                        alt=""
                        className="image-full _w-auto h-auto-mobile-portrait"
                      /> */}
                    </div>
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

export default TheSolution;
