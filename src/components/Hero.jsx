"use client";

import React, { useEffect, useRef, useState } from "react";
import Watsappbtn from "./Watsappbtn.jsx";
import { FaPause, FaPlay } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoOneRef = useRef(null);
  const videoTwoRef = useRef(null);
  const timelineOneRef = useRef(null);
  const timelineTwoRef = useRef(null);
  const playPromiseRef = useRef(null);

  const safelyPause = async (video) => {
    if (!video) return;

    const pendingPlay = playPromiseRef.current;
    if (pendingPlay) {
      try {
        await pendingPlay;
      } catch {
        // Ignore AbortError from interrupted play requests.
      }
      playPromiseRef.current = null;
    }

    if (!video.paused) {
      video.pause();
    }
  };

  const pauseAllVideos = async () => {
    await safelyPause(videoOneRef.current);
    await safelyPause(videoTwoRef.current);
    setPlayingVideoId(null);
  };

  const handleTabChange = async (tab) => {
    setActiveTab(tab);
    await pauseAllVideos();
  };

  const handleVideoToggle = async (event, videoId) => {
    event.preventDefault();
    event.stopPropagation();

    const targetVideo =
      videoId === "video-1" ? videoOneRef.current : videoTwoRef.current;
    const otherVideo =
      videoId === "video-1" ? videoTwoRef.current : videoOneRef.current;

    if (!targetVideo) return;

    await safelyPause(otherVideo);

    if (!targetVideo.paused) {
      await safelyPause(targetVideo);
      setPlayingVideoId(null);
      return;
    }

    try {
      setPlayingVideoId(videoId);
      const playPromise = targetVideo.play();
      playPromiseRef.current = playPromise;
      await playPromise;
      playPromiseRef.current = null;
      if (!targetVideo.paused) {
        setPlayingVideoId(videoId);
      }
    } catch (error) {
      playPromiseRef.current = null;
      if (error?.name !== "AbortError") {
        console.error("Hero video playback failed:", error);
      }
      if (targetVideo.paused) {
        setPlayingVideoId(null);
      }
    }
  };

  const renderControlButton = (videoId, videoDomId) => {
    const isPlaying = playingVideoId === videoId;

    return (
      <button
        type="button"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        aria-controls={videoDomId}
        className={`home-hero_video-button ${isPlaying ? "is-playing" : "is-paused"}`}
        onClick={(event) => handleVideoToggle(event, videoId)}
      >
        {isPlaying ? <FaPause /> : <FaPlay className="home-hero_video-button__play-icon" />}
      </button>
    );
  };

  useEffect(() => {
    const videos = [
      { video: videoOneRef.current, timeline: timelineOneRef.current, id: "video-1" },
      { video: videoTwoRef.current, timeline: timelineTwoRef.current, id: "video-2" },
    ];

    const listeners = [];

    videos.forEach(({ video, timeline, id }) => {
      if (video && timeline) {
        timeline.value = 0;
        timeline.style.setProperty("--progress", "0%");

        const handleTimeUpdate = () => {
          const progress = video.duration ? (video.currentTime / video.duration) * 100 : 0;
          timeline.value = progress;
          timeline.style.setProperty("--progress", `${progress}%`);
        };

        const handleInput = (e) => {
          if (!video.duration) return;
          const time = (e.target.value / 100) * video.duration;
          video.currentTime = time;
          e.target.style.setProperty("--progress", `${e.target.value}%`);
        };

        const handleEnded = () => {
          timeline.value = 0;
          timeline.style.setProperty("--progress", "0%");
          setPlayingVideoId((current) => (current === id ? null : current));
        };

        const handleLoadedMetadata = () => {
          timeline.value = 0;
          timeline.style.setProperty("--progress", "0%");
        };

        const handlePause = () => {
          setPlayingVideoId((current) => (current === id ? null : current));
        };

        const handlePlay = () => {
          setPlayingVideoId(id);
        };

        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleEnded);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("pause", handlePause);
        video.addEventListener("play", handlePlay);
        timeline.addEventListener("input", handleInput);

        listeners.push(() => video.removeEventListener("timeupdate", handleTimeUpdate));
        listeners.push(() => video.removeEventListener("ended", handleEnded));
        listeners.push(() => video.removeEventListener("loadedmetadata", handleLoadedMetadata));
        listeners.push(() => video.removeEventListener("pause", handlePause));
        listeners.push(() => video.removeEventListener("play", handlePlay));
        listeners.push(() => timeline.removeEventListener("input", handleInput));
      }
    });

    return () => {
      listeners.forEach((cleanup) => cleanup());
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
                      {t("hero.titleMiddle") ? (
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
                data-current={activeTab}
                data-easing="ease"
                data-duration-in="300"
                data-duration-out="100"
                className="video-tabs w-tabs"
              >
                <div className="video-tabs_content w-tab-content">
                  <div
                    data-w-tab="Tab 1"
                    className={`w-tab-pane ${activeTab === "Tab 1" ? "w--tab-active" : ""}`}
                  >
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
                          ref={videoOneRef}
                          id="e917d018-81a7-83a6-e048-6ab832f8484c-video"
                          loop
                          muted={false}
                          playsInline
                          suppressHydrationWarning
                          data-wf-ignore="true"
                          loading="lazy"
                          preload="auto"
                          poster="/videos/poster.webp"
                          data-object-fit="cover"
                        >
                          <source
                            src="https://courchevelmedia.com/videos/output-ski.webm"
                            type="video/webm"
                          />
                        </video>
                        <noscript>
                          <style
                            dangerouslySetInnerHTML={{ __html: bgvideo }}
                          />
                          <img data-wf-bgvideo-fallback-img="true" alt="" />
                        </noscript>
                        <div aria-live="polite">
                          {renderControlButton(
                            "video-1",
                            "e917d018-81a7-83a6-e048-6ab832f8484c-video"
                          )}
                        </div>
                      </div>
                      <input
                        ref={timelineOneRef}
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
                  <div
                    data-w-tab="Tab 2"
                    className={`w-tab-pane ${activeTab === "Tab 2" ? "w--tab-active" : ""}`}
                  >
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
                          ref={videoTwoRef}
                          id="5d6c1891-9a96-0995-964d-9cc484796234-video"
                          loop
                          muted={false}
                          loading="lazy"
                          preload="metadata"
                          playsInline
                          suppressHydrationWarning
                          poster="/videos/event-poster.webp"
                          data-wf-ignore="true"
                          data-object-fit="cover"
                        >
                          <source
                            src="https://courchevelmedia.com/videos/output-events.webm"
                            type="video/webm"
                          />
                        </video>
                        <noscript>
                          <style
                            dangerouslySetInnerHTML={{ __html: bgvideo }}
                          />
                          <img data-wf-bgvideo-fallback-img="true" alt="" />
                        </noscript>
                        <div aria-live="polite">
                          {renderControlButton(
                            "video-2",
                            "5d6c1891-9a96-0995-964d-9cc484796234-video"
                          )}
                        </div>
                      </div>
                      <input
                        ref={timelineTwoRef}
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="video-tabs_menu hidden-scrollbar w-tab-menu">
                  <a
                    data-w-tab="Tab 1"
                    className={`video-tabs_tab-link w-inline-block w-tab-link ${
                      activeTab === "Tab 1" ? "w--current" : ""
                    }`}
                    onClick={() => handleTabChange("Tab 1")}
                  >
                    <div className="svg-icon _1x1 w-embed">
                      <i className="fa-solid fa-person-skiing text-[white]" style={{ color: "white" }}></i>
                    </div>
                    <div className="text-[white] font-[800]" style={{ color: "white" }}>Ski</div>
                  </a>
                  <a
                    data-w-tab="Tab 2"
                    className={`video-tabs_tab-link w-inline-block w-tab-link ${
                      activeTab === "Tab 2" ? "w--current" : ""
                    }`}
                    onClick={() => handleTabChange("Tab 2")}
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