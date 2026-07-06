export const LANGUAGES = [
  {
    code: "en",
    label: "English",
    short: "EN",
    flagCode: "gb",
    useGlobe: true,
    dir: "ltr",
  },
  {
    code: "es",
    label: "Español",
    short: "ES",
    flagCode: "es",
    dir: "ltr",
  },
  {
    code: "pt",
    label: "Português",
    short: "PT",
    flagCode: "br",
    dir: "ltr",
  },
  {
    code: "ar",
    label: "العربية",
    short: "AR",
    flagCode: "ae",
    dir: "rtl",
  },
  {
    code: "ru",
    label: "Русский",
    short: "RU",
    flagCode: "ru",
    dir: "ltr",
  },
  {
    code: "he",
    label: "עברית",
    short: "HE",
    flagCode: "il",
    dir: "rtl",
  },
];

export const DEFAULT_LOCALE = "en";

export function getLanguage(code) {
  return LANGUAGES.find((lang) => lang.code === code) ?? LANGUAGES[0];
}

export function getFlagUrl(flagCode, width = 40) {
  return `https://flagcdn.com/w${width}/${flagCode}.png`;
}
