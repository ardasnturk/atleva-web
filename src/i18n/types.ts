export const LANGUAGES = ["en", "tr", "de", "fr", "es", "es-MX", "it", "pt-BR", "nl", "ja", "ko"] as const;
export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español (España)",
  "es-MX": "Español (México)",
  it: "Italiano",
  "pt-BR": "Português (Brasil)",
  nl: "Nederlands",
  ja: "日本語",
  ko: "한국어",
};

export interface Item {
  title: string;
  text: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { features: string; privacy: string; pro: string; faq: string; language: string; skip: string };
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; badges: string[]; screenshotAlt: string };
  appStore: { small: string; large: string; soon: string };
  trust: Item[];
  features: {
    title: string;
    subtitle: string;
    /** Six rows, in order: goal, body map, exercise videos, quiet mode, adaptive plan, Apple Health. */
    items: (Item & { points: string[]; alt: string })[];
  };
  privacy: { eyebrow: string; title: string; text: string; points: Item[]; link: string };
  pro: {
    eyebrow: string;
    title: string;
    subtitle: string;
    freeTitle: string;
    free: string[];
    proTitle: string;
    proItems: string[];
    note: string;
    progressAlt: string;
    coachAlt: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string };
  footer: { tagline: string; legal: string; privacy: string; terms: string; support: string; disclaimer: string };
  legal: { updated: string; back: string };
}
