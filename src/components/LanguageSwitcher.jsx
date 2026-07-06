"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { LANGUAGES, getFlagUrl } from "@/lib/languages";
import "./LanguageSwitcher.css";

function LanguageFlag({ item, className = "" }) {
  if (item.useGlobe) {
    return (
      <span className={`language-switcher__flag ${className}`}>
        <i className="fa-solid fa-globe language-switcher__globe" aria-hidden="true"></i>
      </span>
    );
  }

  return (
    <span className={`language-switcher__flag ${className}`}>
      <img
        src={getFlagUrl(item.flagCode, 40)}
        srcSet={`${getFlagUrl(item.flagCode, 80)} 2x`}
        alt=""
        width={20}
        height={15}
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
