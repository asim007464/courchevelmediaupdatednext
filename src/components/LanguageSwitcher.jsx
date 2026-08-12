"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { LANGUAGES, getFlagUrl } from "@/lib/languages";
import "./LanguageSwitcher.css";

function GlobeIcon() {
  return (
    <svg
      className="language-switcher__globe"
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LanguageFlag({ item, className = "" }) {
  if (item.useGlobe) {
    return (
      <span className={`language-switcher__flag ${className}`}>
        <span className="language-switcher__globe-wrap">
          <GlobeIcon />
        </span>
      </span>
    );
  }

  return (
    <span className={`language-switcher__flag ${className}`}>
      <img
        src={getFlagUrl(item.flagCode, 40)}
        srcSet={`${getFlagUrl(item.flagCode, 80)} 2x`}
        alt=""
        width={22}
        height={22}
        className="language-switcher__flag-img"
        loading="lazy"
      />
    </span>
  );
}

export default function LanguageSwitcher() {
  const { locale, setLocale, language } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        type="button"
        className="language-switcher__trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <LanguageFlag item={language} className="language-switcher__flag--trigger" />
        <span>{language.short}</span>
        <i
          className={`fa-solid fa-chevron-${open ? "up" : "down"} language-switcher__chevron`}
          aria-hidden="true"
        ></i>
      </button>

      {open && (
        <div className="language-switcher__menu" role="listbox">
          {LANGUAGES.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={locale === item.code}
              className={`language-switcher__option ${
                locale === item.code ? "is-active" : ""
              }`}
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
            >
              <LanguageFlag item={item} />
              <span className="language-switcher__label">{item.label}</span>
              {locale === item.code && (
                <i className="fa-solid fa-check language-switcher__check"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
