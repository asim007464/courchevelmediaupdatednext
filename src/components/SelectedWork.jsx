"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getImageSrc } from "@/lib/getImageSrc";
import { useLanguage } from "@/context/LanguageProvider";
import { fetchGalleryState } from "@/lib/supabase/content";

import { defaultGalleryCollections } from "@/Data/galleryDefaults";

const collections = defaultGalleryCollections;

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
  const [remoteCollections, setRemoteCollections] = useState(null);
  const scrollerRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    didDrag: false,
    startX: 0,
    startScrollLeft: 0,
    pointerId: null,
  });

  useEffect(() => {
    let active = true;
    Promise.all([
      fetchGalleryState("ski"),
      fetchGalleryState("events"),
    ]).then(([ski, events]) => {
      if (!active) return;
      setRemoteCollections({
        ski: ski?.length ? ski : collections.ski,
        events: events?.length ? events : collections.events,
      });
    });
    return () => {
      active = false;
    };
  }, []);

  const items = useMemo(
    () => (remoteCollections || collections)[activeTab],
    [activeTab, remoteCollections]
  );
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
