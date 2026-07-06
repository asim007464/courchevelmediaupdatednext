"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LOCALE, getLanguage } from "@/lib/languages";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);

function getNestedValue(object, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], object);
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("courchevel-locale");
    if (saved && translations[saved]) {
      setLocaleState(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const language = getLanguage(locale);
    window.localStorage.setItem("courchevel-locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
    document.body.dataset.textDir = language.dir;
  }, [locale, ready]);

  const setLocale = useCallback((code) => {
    if (translations[code]) {
      setLocaleState(code);
    }
  }, []);

  const t = useCallback(
    (key, fallback = "") => {
      const value =
        getNestedValue(translations[locale], key) ??
        getNestedValue(translations[DEFAULT_LOCALE], key);

      return value ?? fallback;
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      ready,
      language: getLanguage(locale),
    }),
    [locale, setLocale, t, ready]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
