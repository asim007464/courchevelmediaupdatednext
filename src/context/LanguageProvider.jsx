"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { DEFAULT_LOCALE, getLanguage } from "@/lib/languages";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);
const LOCALE_STORAGE_KEY = "courchevel-locale";
const LOCALE_CHANGE_EVENT = "courchevel-locale-change";

function getNestedValue(object, path) {
  return path.split(".").reduce((acc, part) => acc?.[part], object);
}

function readStoredLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return saved && translations[saved] ? saved : DEFAULT_LOCALE;
}

function subscribeToLocale(onStoreChange) {
  if (typeof window === "undefined") return () => {};

  const handler = () => onStoreChange();
  window.addEventListener(LOCALE_CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

function getServerLocaleSnapshot() {
  return DEFAULT_LOCALE;
}

function persistLocale(code) {
  if (!translations[code]) return;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, code);
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
}

export function LanguageProvider({ children }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    readStoredLocale,
    getServerLocaleSnapshot
  );

  useEffect(() => {
    const language = getLanguage(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
    document.body.dataset.textDir = language.dir;
  }, [locale]);

  const setLocale = useCallback((code) => {
    persistLocale(code);
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
      ready: true,
      language: getLanguage(locale),
    }),
    [locale, setLocale, t]
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
