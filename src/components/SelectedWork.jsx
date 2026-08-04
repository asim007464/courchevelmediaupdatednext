"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getImageSrc } from "@/lib/getImageSrc";
import { useLanguage } from "@/context/LanguageProvider";

import Adriana1 from "@/images/Computer/Ski/Adriana Howerton - Brasil/1.webp";
import Adriana2 from "@/images/Computer/Ski/Adriana Howerton - Brasil/2.webp";
import Adriana3 from "@/images/Computer/Ski/Adriana Howerton - Brasil/3.webp";
import Adriana4 from "@/images/Computer/Ski/Adriana Howerton - Brasil/4.webp";
import Adriana5 from "@/images/Computer/Ski/Adriana Howerton - Brasil/5.webp";
import Adriana6 from "@/images/Computer/Ski/Adriana Howerton - Brasil/6.webp";
import Adriana7 from "@/images/Computer/Ski/Adriana Howerton - Brasil/7.webp";
import Cloe1 from "@/images/Computer/Ski/Cloe Chiodi - France/1.webp";
import Cloe2 from "@/images/Computer/Ski/Cloe Chiodi - France/2.webp";
import Cloe3 from "@/images/Computer/Ski/Cloe Chiodi - France/3.webp";
import Cloe4 from "@/images/Computer/Ski/Cloe Chiodi - France/4.webp";
import Cloe5 from "@/images/Computer/Ski/Cloe Chiodi - France/5.webp";
import Cloe6 from "@/images/Computer/Ski/Cloe Chiodi - France/6.webp";
import Elin1 from "@/images/Computer/Ski/Elin Silverio - Italy/1.webp";
import Elin2 from "@/images/Computer/Ski/Elin Silverio - Italy/2.webp";
import Irene1 from "@/images/Computer/Ski/Irene Sharp - USA/1.webp";
import Irene2 from "@/images/Computer/Ski/Irene Sharp - USA/2.webp";
import Irene3 from "@/images/Computer/Ski/Irene Sharp - USA/3.webp";
import Irene4 from "@/images/Computer/Ski/Irene Sharp - USA/5.webp";
import Irene5 from "@/images/Computer/Ski/Irene Sharp - USA/6.webp";
import Irene6 from "@/images/Computer/Ski/Irene Sharp - USA/7.webp";
import Luis1 from "@/images/Computer/Ski/Luis Judez - Venezuela/1.webp";
import Luis2 from "@/images/Computer/Ski/Luis Judez - Venezuela/2.webp";
import Luis3 from "@/images/Computer/Ski/Luis Judez - Venezuela/3.webp";
import Luis4 from "@/images/Computer/Ski/Luis Judez - Venezuela/4.webp";
import Luis5 from "@/images/Computer/Ski/Luis Judez - Venezuela/5.webp";
import Luis6 from "@/images/Computer/Ski/Luis Judez - Venezuela/6.webp";
import Megan1 from "@/images/Computer/Ski/Megan Hackbarth - USA/1.webp";
import Megan2 from "@/images/Computer/Ski/Megan Hackbarth - USA/2.webp";
import Megan3 from "@/images/Computer/Ski/Megan Hackbarth - USA/3.webp";
import Megan4 from "@/images/Computer/Ski/Megan Hackbarth - USA/4.webp";
import Megan5 from "@/images/Computer/Ski/Megan Hackbarth - USA/5.webp";
import Megan6 from "@/images/Computer/Ski/Megan Hackbarth - USA/6.webp";
import Megan7 from "@/images/Computer/Ski/Megan Hackbarth - USA/7.webp";
import Niccolo1 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/1.webp";
import Niccolo2 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/2.webp";
import Niccolo3 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/3.webp";
import Niccolo4 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/4.webp";
import Robert1 from "@/images/Computer/Ski/Robert Horwitz - USA/1.webp";
import Robert2 from "@/images/Computer/Ski/Robert Horwitz - USA/2.webp";
import Robert3 from "@/images/Computer/Ski/Robert Horwitz - USA/3.webp";
import Robert4 from "@/images/Computer/Ski/Robert Horwitz - USA/4.webp";
import Robert5 from "@/images/Computer/Ski/Robert Horwitz - USA/5.webp";
import Robert6 from "@/images/Computer/Ski/Robert Horwitz - USA/6.webp";
import Robert7 from "@/images/Computer/Ski/Robert Horwitz - USA/7.webp";
import Robert8 from "@/images/Computer/Ski/Robert Horwitz - USA/8.webp";
import Robert9 from "@/images/Computer/Ski/Robert Horwitz - USA/9.webp";
import Baies1 from "@/images/Computer/Events/Baies - Content package and events/1.webp";
import Baies2 from "@/images/Computer/Events/Baies - Content package and events/2.webp";
import Baies3 from "@/images/Computer/Events/Baies - Content package and events/3.webp";
import Baies4 from "@/images/Computer/Events/Baies - Content package and events/4.webp";
import Baies5 from "@/images/Computer/Events/Baies - Content package and events/5.webp";
import Baies6 from "@/images/Computer/Events/Baies - Content package and events/6.webp";
import Baies7 from "@/images/Computer/Events/Baies - Content package and events/7.webp";
import Baies8 from "@/images/Computer/Events/Baies - Content package and events/8.webp";
import Baies9 from "@/images/Computer/Events/Baies - Content package and events/9.webp";
import Blondish1 from "@/images/Computer/Events/Blondish - Private party/1.webp";
import Blondish2 from "@/images/Computer/Events/Blondish - Private party/2.webp";
import Blondish3 from "@/images/Computer/Events/Blondish - Private party/3.webp";
import Blondish4 from "@/images/Computer/Events/Blondish - Private party/4.webp";
import Bob1 from "@/images/Computer/Events/Bob Sinclair - Private party/1.webp";
import Bob2 from "@/images/Computer/Events/Bob Sinclair - Private party/2.webp";
import Claptone1 from "@/images/Computer/Events/Claptone - Private party/1.webp";
import Claptone2 from "@/images/Computer/Events/Claptone - Private party/2.webp";
import Claptone3 from "@/images/Computer/Events/Claptone - Private party/3.webp";
import Claptone4 from "@/images/Computer/Events/Claptone - Private party/4.webp";
import Claptone5 from "@/images/Computer/Events/Claptone - Private party/5.webp";
import Folie1 from "@/images/Computer/Events/Folie Douce Event/1.webp";
import Folie2 from "@/images/Computer/Events/Folie Douce Event/2.webp";
import Folie3 from "@/images/Computer/Events/Folie Douce Event/3.webp";
import Folie4 from "@/images/Computer/Events/Folie Douce Event/4.webp";
import Folie5 from "@/images/Computer/Events/Folie Douce Event/5.webp";
import Folie6 from "@/images/Computer/Events/Folie Douce Event/6.webp";
import Folie7 from "@/images/Computer/Events/Folie Douce Event/7.webp";
import Folie8 from "@/images/Computer/Events/Folie Douce Event/8.webp";
import Mangeoire1 from "@/images/Computer/Events/Mangeoire - Content package and events/1.webp";
import Mangeoire2 from "@/images/Computer/Events/Mangeoire - Content package and events/2.webp";
import Mangeoire3 from "@/images/Computer/Events/Mangeoire - Content package and events/3.webp";
import Mangeoire4 from "@/images/Computer/Events/Mangeoire - Content package and events/4.webp";
import Mangeoire5 from "@/images/Computer/Events/Mangeoire - Content package and events/5.webp";
import Mangeoire6 from "@/images/Computer/Events/Mangeoire - Content package and events/6.webp";
import Marina1 from "@/images/Computer/Events/Marina Diniz - Live section and photography/1.webp";
import Marina2 from "@/images/Computer/Events/Marina Diniz - Live section and photography/2.webp";
import Marina3 from "@/images/Computer/Events/Marina Diniz - Live section and photography/3.webp";
import Marina4 from "@/images/Computer/Events/Marina Diniz - Live section and photography/4.webp";
import Morgen1 from "@/images/Computer/Events/Morgen Shtern - Private party/1.webp";
import Morgen2 from "@/images/Computer/Events/Morgen Shtern - Private party/2.webp";
import Morgen3 from "@/images/Computer/Events/Morgen Shtern - Private party/3.webp";
import Morgen4 from "@/images/Computer/Events/Morgen Shtern - Private party/4.webp";
import Morgen5 from "@/images/Computer/Events/Morgen Shtern - Private party/5.webp";
import Swae1 from "@/images/Computer/Events/Swae Lee - Private party/1.webp";
import Swae2 from "@/images/Computer/Events/Swae Lee - Private party/2.webp";
import Swae3 from "@/images/Computer/Events/Swae Lee - Private party/5.webp";
import Swae4 from "@/images/Computer/Events/Swae Lee - Private party/3.webp";
import Swae5 from "@/images/Computer/Events/Swae Lee - Private party/4.webp";

const createItems = (images, label) =>
  images.map((src, index) => ({
    src,
    alt: `${label} portfolio image ${index + 1}`,
  }));

const collections = {
  ski: createItems(
    [
      Adriana1,
      Adriana2,
      Adriana3,
      Adriana4,
      Adriana5,
      Adriana6,
      Adriana7,
      Cloe1,
      Cloe2,
      Cloe3,
      Cloe4,
      Cloe5,
      Cloe6,
      Elin1,
      Elin2,
      Irene1,
      Irene2,
      Irene3,
      Irene4,
      Irene5,
      Irene6,
      Luis1,
      Luis2,
      Luis3,
      Luis4,
      Luis5,
      Luis6,
      Megan1,
      Megan2,
      Megan3,
      Megan4,
      Megan5,
      Megan6,
      Megan7,
      Niccolo1,
      Niccolo2,
      Niccolo3,
      Niccolo4,
      Robert1,
      Robert2,
      Robert3,
      Robert4,
      Robert5,
      Robert6,
      Robert7,
      Robert8,
      Robert9,
    ],
    "Ski"
  ),
  events: createItems(
    [
      Baies1,
      Baies2,
      Baies3,
      Baies4,
      Baies5,
      Baies6,
      Baies7,
      Baies8,
      Baies9,
      Blondish1,
      Blondish2,
      Blondish3,
      Blondish4,
      Bob1,
      Bob2,
      Claptone1,
      Claptone2,
      Claptone3,
      Claptone4,
      Claptone5,
      Folie1,
      Folie2,
      Folie3,
      Folie4,
      Folie5,
      Folie6,
      Folie7,
      Folie8,
      Mangeoire1,
      Mangeoire2,
      Mangeoire3,
      Mangeoire4,
      Mangeoire5,
      Mangeoire6,
      Marina1,
      Marina2,
      Marina3,
      Marina4,
      Morgen1,
      Morgen2,
      Morgen3,
      Morgen4,
      Morgen5,
      Swae1,
      Swae2,
      Swae3,
      Swae4,
      Swae5,
    ],
    "Event"
  ),
};

const panelTileClasses = [
  "selected-work__tile selected-work__tile--portrait",
  "selected-work__tile selected-work__tile--hero",
  "selected-work__tile selected-work__tile--square",
  "selected-work__tile selected-work__tile--portrait-right",
  "selected-work__tile selected-work__tile--wide-left",
  "selected-work__tile selected-work__tile--wide-right",
];

const chunkItems = (items, size) => {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    const chunk = items.slice(index, index + size);
    if (chunk.length === size) chunks.push(chunk);
  }
  return chunks;
};

export default function SelectedWork() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("ski");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollerRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    didDrag: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: null,
  });

  const items = useMemo(() => collections[activeTab], [activeTab]);
  const panels = useMemo(() => chunkItems(items, 6), [items]);
  const lightboxItem =
    lightboxIndex !== null ? items[lightboxIndex] ?? null : null;

  const updateProgress = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setScrollProgress(maxScroll > 0 ? scroller.scrollLeft / maxScroll : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const showPrevious = () => {
    setLightboxIndex((current) => {
      if (current === null || items.length === 0) return current;
      return (current - 1 + items.length) % items.length;
    });
  };

  const showNext = () => {
    setLightboxIndex((current) => {
      if (current === null || items.length === 0) return current;
      return (current + 1) % items.length;
    });
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = 0;
    setScrollProgress(0);
    const frame = window.requestAnimationFrame(updateProgress);
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab, panels]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateProgress();
    window.addEventListener("resize", updateProgress);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => updateProgress())
        : null;
    resizeObserver?.observe(scroller);

    return () => {
      window.removeEventListener("resize", updateProgress);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const scroller = scrollerRef.current;
      if (!scroller || !dragState.current.isDragging) return;
      if (
        dragState.current.pointerId !== null &&
        event.pointerId !== dragState.current.pointerId
      ) {
        return;
      }

      const delta = event.clientX - dragState.current.startX;
      if (Math.abs(delta) > 6) {
        dragState.current.didDrag = true;
      }

      event.preventDefault();
      scroller.scrollLeft = dragState.current.startScrollLeft - delta;
      updateProgress();
    };

    const handlePointerUp = (event) => {
      if (!dragState.current.isDragging) return;
      if (
        dragState.current.pointerId !== null &&
        event.pointerId !== dragState.current.pointerId
      ) {
        return;
      }

      const wasDrag = dragState.current.didDrag;
      dragState.current.isDragging = false;
      dragState.current.pointerId = null;
      setIsDragging(false);

      if (wasDrag) return;

      const hitTarget = document.elementFromPoint(event.clientX, event.clientY);
      const tile = hitTarget?.closest?.("[data-lightbox-index]");
      if (!tile) return;

      const index = Number(tile.getAttribute("data-lightbox-index"));
      if (!Number.isNaN(index)) {
        setLightboxIndex(index);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: false });
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, items.length]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeTab]);

  const handleTrackClick = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickRatio = (event.clientX - rect.left) / rect.width;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    scroller.scrollTo({ left: maxScroll * clickRatio, behavior: "smooth" });
  };

  const handlePointerDown = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragState.current = {
      isDragging: true,
      didDrag: false,
      startX: event.clientX,
      startScrollLeft: scroller.scrollLeft,
      pointerId: event.pointerId,
    };
    setIsDragging(true);

    try {
      scroller.setPointerCapture(event.pointerId);
    } catch {
      // Some browsers may reject capture; window listeners still handle drag.
    }
  };

  return (
    <section id="portfolio" className="selected-work section">
      <div className="padding-section-small">
        <div className="selected-work__header">
          <div>
            <h2 className="heading-style-h2 text-white">
              {t("portfolio.title")}
              <span className="text-color-gradient"> {t("portfolio.titleGradient")}</span>
            </h2>
            <p className="selected-work__subtitle">{t("portfolio.subtitle")}</p>
          </div>
        </div>

        <div className="selected-work__tabs" role="tablist" aria-label="Portfolio categories">
          <button
            type="button"
            className={`selected-work__tab ${activeTab === "ski" ? "is-active" : ""}`}
            onClick={() => setActiveTab("ski")}
          >
            {t("portfolio.skiTab")}
          </button>
          <button
            type="button"
            className={`selected-work__tab ${activeTab === "events" ? "is-active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            {t("portfolio.eventsTab")}
          </button>
        </div>

        <div
          ref={scrollerRef}
          className={`selected-work__scroller ${isDragging ? "is-dragging" : ""}`}
          onScroll={updateProgress}
          onPointerDown={handlePointerDown}
        >
          <div className="selected-work__track">
            {panels.map((panel, panelIndex) => (
              <div key={`${activeTab}-panel-${panelIndex}`} className="selected-work__panel">
                {panel.map((item, index) => {
                  const itemIndex = panelIndex * 6 + index;
                  return (
                    <button
                      key={`${activeTab}-${panelIndex}-${index}`}
                      type="button"
                      data-lightbox-index={itemIndex}
                      className={
                        panelTileClasses[index] ||
                        panelTileClasses[panelTileClasses.length - 1]
                      }
                      onClick={() => {
                        if (dragState.current.didDrag) return;
                        setLightboxIndex(itemIndex);
                      }}
                      aria-label={`View ${item.alt}`}
                    >
                      <img
                        src={getImageSrc(item.src)}
                        alt={item.alt}
                        className="selected-work__image"
                        loading="lazy"
                        draggable="false"
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="selected-work__footer">
          <button
            type="button"
            className="selected-work__progress"
            onClick={handleTrackClick}
            aria-label="Scroll portfolio gallery"
          >
            <span
              className="selected-work__progress-thumb"
              style={{
                width: `${Math.max(scrollProgress * 100, 0)}%`,
              }}
            />
          </button>
          <div className="selected-work__hint">
            <span aria-hidden="true">←</span>
            <span className="selected-work__hint-desktop">{t("portfolio.dragHint")}</span>
            <span className="selected-work__hint-mobile">{t("portfolio.swipeHint")}</span>
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>

      {lightboxItem && typeof document !== "undefined"
        ? createPortal(
            <div
              className="selected-work-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={lightboxItem.alt}
              onClick={closeLightbox}
            >
              <button
                type="button"
                className="selected-work-lightbox__close"
                onClick={closeLightbox}
                aria-label="Close image"
              >
                ×
              </button>
              <button
                type="button"
                className="selected-work-lightbox__nav selected-work-lightbox__nav--prev"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <div
                className="selected-work-lightbox__frame"
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={getImageSrc(lightboxItem.src)}
                  alt={lightboxItem.alt}
                  className="selected-work-lightbox__image"
                />
              </div>
              <button
                type="button"
                className="selected-work-lightbox__nav selected-work-lightbox__nav--next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
