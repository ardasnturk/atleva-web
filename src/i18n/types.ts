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
  nav: { menu: string; new: string; features: string; privacy: string; pro: string; faq: string; language: string; skip: string };
  hero: {
    /** Pill above the headline, links to the "New in 1.1" section. */
    newBadge: string;
    title: string;
    /** Second headline line, drawn with an animated gradient. */
    highlight: string;
    subtitle: string;
    badges: string[];
    screenshotAlt: string;
    watchAlt: string;
    /** Floating cards around the phone: live heart rate, streak, camera form score. */
    chips: { heartRate: string; streak: string; form: string };
  };
  appStore: { small: string; large: string; soon: string };
  /** Short phrases for the scrolling ribbon under the hero. */
  marquee: string[];
  /** Labels for the animated numbers: 119 exercises, 10 minutes, 2×2 m, 0 equipment. */
  stats: { exercises: string; minutes: string; space: string; equipment: string };
  whatsNew: {
    eyebrow: string;
    title: string;
    subtitle: string;
    camera: Item & { points: string[]; alt: string };
    /** alts: the three watch screens — today's session, following the iPhone workout, a workout on the watch. */
    watch: Item & { points: string[]; alts: string[] };
    /** now: the time label on the sample notifications ("now"); samples: three example notifications. */
    reminders: Item & { now: string; samples: Item[] };
    voice: Item & { quote: string };
    smaller: Item;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Six rows, in order: goal, body map, exercise videos, quiet mode, adaptive plan, Apple Health. */
    items: (Item & { points: string[]; alt: string })[];
  };
  motivation: {
    eyebrow: string;
    title: string;
    text: string;
    /** Three steps: start small, show up, grow. */
    steps: Item[];
    /** Seven short weekday labels, Monday first. */
    days: string[];
    ringLabel: string;
    weekLabel: string;
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
