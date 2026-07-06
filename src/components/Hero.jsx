"use client";

import React, { useEffect } from "react";
import Watsappbtn from "./Watsappbtn.jsx";
import { FaPause, FaPlay } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();
  useEffect(() => {
    // Ensure Webflow is defined globally
    window.Webflow = window.Webflow || [];

    // Define the function to be pushed
    const initHeroVideos = () => {
      const video1 = document.querySelector("#hero-video-tab-1 video");
      const video2 = document.querySelector("#hero-video-tab-2 video");

      if (video1) {
        video1.muted = false;
        // Clear existing sources first
        while (video1.firstChild) {
          video1.removeChild(video1.firstChild);
        }
        // Create and append source element
        const source1 = document.createElement('source');
        source1.src = "https://courchevelmedia.com/videos/output-ski.webm";
        source1.type = "video/webm";
        video1.appendChild(source1);
        // Load the new source
        video1.load();
        video1.pause();

        const btn1 = document.querySelector('button[aria-controls="e917d018-81a7-83a6-e048-6ab832f8484c-video"]');
        if (btn1) {
          const pauseSpan = btn1.querySelector('.pause-button');
          const playSpan = btn1.querySelector('.video-button-icon:not(.pause-button)');
          if (pauseSpan) pauseSpan.setAttribute('hidden', '');
          if (playSpan) playSpan.removeAttribute('hidden');
        }
      }

      if (video2) {
        video2.muted = false;
        // Clear existing sources first
        while (video2.firstChild) {
          video2.removeChild(video2.firstChild);
        }
        // Create and append source element
        const source2 = document.createElement('source');
        source2.src = "https://courchevelmedia.com/videos/output-events.webm";
        source2.type = "video/webm";
        video2.appendChild(source2);
        // Load the new source
        video2.load();
        video2.pause();

        const btn2 = document.querySelector('button[aria-controls="5d6c1891-9a96-0995-964d-9cc484796234-video"]');
        if (btn2) {
          const pauseSpan = btn2.querySelector('.pause-button');
          const playSpan = btn2.querySelector('.video-button-icon:not(.pause-button)');
          if (pauseSpan) pauseSpan.setAttribute('hidden', '');
          if (playSpan) playSpan.removeAttribute('hidden');
        }
      }
    };

    window.Webflow.push(initHeroVideos);
    initHeroVideos();
  }, []);

  useEffect(() => {
    window.Webflow = window.Webflow || [];

    const heroTitleIconHoverAnimation = () => {
      document.querySelectorAll(".home-hero_title-icon").forEach((icon) => {
        icon.addEventListener("animationend", function () {
          this.classList.remove("animate");
        });

        icon.addEventListener("mouseenter", function () {
          if (!this.classList.contains("animate"))
            this.classList.add("animate");
        });
      });
    };

    window.Webflow.push(heroTitleIconHoverAnimation);
    heroTitleIconHoverAnimation();
  }, []);

  // Video timeline functionality
  useEffect(() => {
    const videos = [
      { video: document.querySelector("#hero-video-tab-1 video"), timeline: document.getElementById("timeline-1") },
      { video: document.querySelector("#hero-video-tab-2 video"), timeline: document.getElementById("timeline-2") },
      { video: document.querySelector("#hero-video-tab-3 video"), timeline: document.getElementById("timeline-3") }
    ];

    videos.forEach(({ video, timeline }) => {
      if (video && timeline) {
        // Initialize timeline at 0
        timeline.value = 0;
        timeline.style.setProperty('--progress', '0%');

        // Update timeline as video plays
        video.addEventListener('timeupdate', () => {
          const progress = (video.currentTime / video.duration) * 100;
          timeline.value = progress;
          timeline.style.setProperty('--progress', `${progress}%`);
        });

        // Seek video when timeline is clicked
        timeline.addEventListener('input', (e) => {
          const time = (e.target.value / 100) * video.duration;
          video.currentTime = time;
          e.target.style.setProperty('--progress', `${e.target.value}%`);
        });

        // Reset timeline when video ends
        video.addEventListener('ended', () => {
          timeline.value = 0;
          timeline.style.setProperty('--progress', '0%');
        });

        // Reset timeline when video loads
        video.addEventListener('loadedmetadata', () => {
          timeline.value = 0;
          timeline.style.setProperty('--progress', '0%');
        });
      }
    });
  }, []);

  useEffect(() => {
    const tabLinks = document.querySelectorAll(".video-tabs_tab-link");
    const video1 = document.querySelector("#hero-video-tab-1 video");
    const video2 = document.querySelector("#hero-video-tab-2 video");

    const updateButtonToPlayIcon = (videoId) => {
      const btn = document.querySelector(`button[aria-controls="${videoId}"]`);
      if (btn) {
        const pauseSpan = btn.querySelector('.pause-button');
        const playSpan = btn.querySelector('.video-button-icon:not(.pause-button)');
        if (pauseSpan) pauseSpan.setAttribute('hidden', '');
        if (playSpan) playSpan.removeAttribute('hidden');
      }
    };

    const handleTabClick = (e) => {
      const targetTab = e.currentTarget.getAttribute("data-w-tab");

      if (targetTab === "Tab 1") {
        if (video2) {
          video2.pause();
          updateButtonToPlayIcon(video2.id);
        }
      } else if (targetTab === "Tab 2") {
        if (video1) {
          video1.pause();
          updateButtonToPlayIcon(video1.id);
        }
      }
    };

    tabLinks.forEach((link) => {
      link.addEventListener("click", handleTabClick);
    });

    return () => {
      tabLinks.forEach((link) => {
        link.removeEventListener("click", handleTabClick);
      });
    };
  }, []);

  const bgvideo = `
    [data-wf-bgvideo-fallback-img] {
        display: none;
        }

        @media (prefers-reduced-motion: reduce) {
            [data-wf-bgvideo-fallback-img] {
                position: absolute;
                z-index: -100;
                display: inline-block;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    `;

  const timelineStyles = `
    .video-timeline {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      outline: none;
      border-radius: 2px;
      cursor: pointer;
      margin-bottom: 12px;
      position: relative;
      --progress: 0%;
    }

    .video-timeline::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 14px;
      height: 14px;
      background: white;
      cursor: pointer;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      position: relative;
      margin-top: -5px;
    }

    .video-timeline::-moz-range-thumb {
      width: 14px;
      height: 14px;
      background: white;
      cursor: pointer;
      border-radius: 50%;
      border: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      margin-top: -5px;
    }

    .video-timeline::-webkit-slider-runnable-track {
      background: linear-gradient(to right, white 0%, white var(--progress), rgba(255, 255, 255, 0.3) var(--progress), rgba(255, 255, 255, 0.3) 100%);
      height: 4px;
      border-radius: 2px;
    }

    .video-timeline::-moz-range-progress {
      background: white;
      height: 4px;
      border-radius: 2px;
    }

    .video-timeline::-moz-range-track {
      background: rgba(255, 255, 255, 0.3);
      height: 4px;
      border-radius: 2px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: timelineStyles }} />
      <section className="section">
        <div className="container-medium">
          <div className="home-hero-wrap">
            <div className="home-hero-content">
              <div
                data-w-id="8bda3880-bde6-8b8d-8448-84bda71a7749"
                className="home-hero_title"
              >
                <div className="text-color-white">
                  <div className="w-embed">
                    <h1
                      id="home-hero-title"
                      style={{ color: "white" }}
                      className="heading-style-h1"
                    >
                      {t("hero.titleBefore")}
                      {t("hero.titleMiddle") === "liday" ? (
                        <span style={{ whiteSpace: "nowrap" }}>
                          <span> h</span>
                          <span className="home-hero_title-icon">
                            &nbsp; &nbsp;
                          </span>
                          <span>liday</span>
                        </span>
                      ) : t("hero.titleMiddle") ? (
                        <span>{t("hero.titleMiddle")}</span>
                      ) : null}
                      <span className="text-color-gradient">
                        {t("hero.titleGradient")}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div
                data-w-id="c0734daa-1d10-3f73-ccf5-bebe18f1ba96"
                className="home-hero_paragraph"
              >
                <div className="text-weight-medium">
                  <p className="text-size-large" style={{ color: "white" }}>
                    {t("hero.subtitle")}
                  </p>
                </div>
              </div>
              <div
                data-w-id="c1b3243e-92b3-a2c9-4275-53f2662a2d0c"
                className="home-hero_cta flex"
              >
                <a
                  humblytics="home-hero_button"
                  target="_blank"
                  href="https://www.instagram.com/courchevelmedia"
                  className="buttoninsta  w-button flex items-center "
                >
                  <i className="fa-brands mr-1.5 text-[24px] relative fa-instagram"></i>{" "}
                  <span> {t("hero.instagram")}</span>
                </a>
                <div className="w-embed">
                  <Watsappbtn></Watsappbtn>
                </div>
              </div>
              <div
                data-w-id="2618ad9a-39b2-c10b-2334-eb0fb6d4ccf0"
                data-current="Tab 1"
                data-easing="ease"
                data-duration-in="300"
                data-duration-out="100"
                className="video-tabs w-tabs"
              >
                <div className="video-tabs_content w-tab-content">
                  <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                    <div className="home-hero_video-wrap">
                      <div
                        id="hero-video-tab-1"
                        data-video-urls=""
                        data-autoplay="false"
                        data-loop="true"
                        data-wf-ignore="true"
                        className="home-hero_video w-background-video w-background-video-atom"
                      >
                        <video
                          id="e917d018-81a7-83a6-e048-6ab832f8484c-video"
                          loop
                          muted={false}
                          playsInline
                          suppressHydrationWarning
                          data-wf-ignore="true"
                          loading="lazy"
                          preload="none"
                          poster="/videos/poster.webp"
                          data-object-fit="cover"
                        ></video>
                        <noscript>
                          <style
                            dangerouslySetInnerHTML={{ __html: bgvideo }}
                          />
                          <img data-wf-bgvideo-fallback-img="true" alt="" />
                        </noscript>
                        <div aria-live="polite">
                          <button
                            type="button"
                            data-w-bg-video-control="true"
                            aria-controls="e917d018-81a7-83a6-e048-6ab832f8484c-video"
                            className="w-backgroundvideo-backgroundvideoplaypausebutton home-hero_video-button w-background-video--control"
                          >
                            <span className="video-button-icon pause-button">
                              {/* <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                alt=""
                                className="image-full"
                              /> */}
                              <div
                                className="flex justify-center items-center text-black text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle at 11.125px -3.73214px, white 23.2636%, #DADADA 52.5204%, #ACACAC 74.4256%, #F6F6F6 100%)",
                                }}
                              >
                                <FaPause className="ml-[2px] sm:ml-[3px] md:ml-[4px]"/>
                              </div>
                            </span>
                            <span hidden="" className="video-button-icon">
                              {/* <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                alt=""
                                className="image-full"
                              /> */}

                              <div
                                className="flex justify-center items-center text-black text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle at 11.125px -3.73214px, white 23.2636%, #DADADA 52.5204%, #ACACAC 74.4256%, #F6F6F6 100%)",
                                }}
                              >
                                <FaPlay className="ml-[2px] sm:ml-[3px] md:ml-[4px]" />
                              </div>


                            </span>
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        id="timeline-1"
                        className="video-timeline"
                        min="0"
                        max="100"
                        defaultValue="0"
                        step="0.1"
                      />
                    </div>
                  </div>
                  <div data-w-tab="Tab 2" className="w-tab-pane">
                    <div className="home-hero_video-wrap">
                      <div
                        id="hero-video-tab-2"
                        data-video-urls=""
                        data-autoplay="false"
                        data-loop="true"
                        data-wf-ignore="true"
                        className="home-hero_video w-background-video w-background-video-atom"
                      >
                        <video
                          id="5d6c1891-9a96-0995-964d-9cc484796234-video"
                          loop
                          muted={false}
                          loading="lazy"
                          preload="none"
                          playsInline
                          suppressHydrationWarning
                          poster="/videos/event-poster.webp"
                          data-wf-ignore="true"
                          data-object-fit="cover"
                        ></video>
                        <noscript>
                          <style
                            dangerouslySetInnerHTML={{ __html: bgvideo }}
                          />
                          <img data-wf-bgvideo-fallback-img="true" alt="" />
                        </noscript>
                        <div aria-live="polite">
                          <button
                            type="button"
                            data-w-bg-video-control="true"
                            aria-controls="5d6c1891-9a96-0995-964d-9cc484796234-video"
                            className="w-backgroundvideo-backgroundvideoplaypausebutton home-hero_video-button w-background-video--control"
                          >
                            <span className="video-button-icon pause-button">
                            <div
                                className="flex justify-center items-center text-black text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle at 11.125px -3.73214px, white 23.2636%, #DADADA 52.5204%, #ACACAC 74.4256%, #F6F6F6 100%)",
                                }}
                              >
                                <FaPause className="ml-[2px] sm:ml-[3px] md:ml-[4px]"/>
                              </div>
                            </span>
                            <span hidden="" className="video-button-icon">
                            <div
                                className="flex justify-center items-center text-black text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle at 11.125px -3.73214px, white 23.2636%, #DADADA 52.5204%, #ACACAC 74.4256%, #F6F6F6 100%)",
                                }}
                              >
                                <FaPlay className="ml-[2px] sm:ml-[3px] md:ml-[4px]" />
                              </div>
                            </span>
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        id="timeline-2"
                        className="video-timeline"
                        min="0"
                        max="100"
                        defaultValue="0"
                        step="0.1"
                      />
                    </div>
                  </div>
                  <div data-w-tab="Tab 3" className="w-tab-pane">
                    <div className="home-hero_video-wrap">
                      <div
                        id="hero-video-tab-3"
                        data-video-urls=""
                        data-autoplay="false"
                        data-loop="true"
                        data-wf-ignore="true"
                        className="home-hero_video w-background-video w-background-video-atom"
                      >
                        <video
                          id="956df11e-02ff-940a-9625-7e886cf8e9c5-video"
                          loop
                          muted={false}
                          playsInline
                          suppressHydrationWarning
                          loading="lazy"
                          preload="none"
                          data-wf-ignore="true"
                          data-object-fit="cover"
                        ></video>
                        <noscript>
                          <style
                            dangerouslySetInnerHTML={{ __html: bgvideo }}
                          />
                          <img data-wf-bgvideo-fallback-img="true" alt="" />
                        </noscript>
                        <div aria-live="polite">
                          <button
                            type="button"
                            data-w-bg-video-control="true"
                            aria-controls="956df11e-02ff-940a-9625-7e886cf8e9c5-video"
                            className="w-backgroundvideo-backgroundvideoplaypausebutton home-hero_video-button w-background-video--control"
                          >
                            <span className="video-button-icon pause-button">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                alt=""
                                className="image-full"
                              />
                            </span>
                            <span hidden="" className="video-button-icon">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                alt=""
                                className="image-full"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                      <input
                        type="range"
                        id="timeline-3"
                        className="video-timeline"
                        min="0"
                        max="100"
                        defaultValue="0"
                        step="0.1"
                      />
                    </div>
                  </div>
                </div>
                <div className="video-tabs_menu hidden-scrollbar w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className="video-tabs_tab-link w-inline-block w-tab-link w--current"
                  >
                    <div className="svg-icon _1x1 w-embed">
                      <i className="fa-solid fa-person-skiing text-[white]" style={{ color: "white" }}></i>
                    </div>
                    <div className="text-[white] font-[800]" style={{ color: "white" }}>Ski</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className="video-tabs_tab-link w-inline-block w-tab-link"
                  >
                    <div className="svg-icon _1x1 w-embed">
                      <i className="fa-solid text-[white] fa-champagne-glasses" style={{ color: "white" }}></i>
                    </div>
                    <div className="text-[white] font-[800]" style={{ color: "white" }}>Events</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero_ornament-1">
          <img
            src="/images/hero-bg.png"
            loading="lazy"
            sizes="(max-width: 991px) 100vw, 1819.9859619140625px"
            alt=""
            className="image-full h-auto"
          />
        </div>
        <div className="home-hero_ornament-1-mobile">
          <img
            src="/images/hero-bg.png"
            loading="eager"
            alt=""
            className="image-full h-auto"
          />
        </div>
        <div className="home-hero_ornament-2-mobile">
          <img
            src="/images/why-courchevel-bg.png"
            loading="eager"
            alt=""
            className="image-full h-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;