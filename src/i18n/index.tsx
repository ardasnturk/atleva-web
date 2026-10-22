import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGUAGES, type Dictionary, type Language } from "./types";
import { en } from "./en";
import { tr } from "./tr";
import { de } from "./de";
import { fr } from "./fr";
import { es } from "./es";
import { esMX } from "./es-MX";
import { it } from "./it";
import { ptBR } from "./pt-BR";
import { nl } from "./nl";
import { ja } from "./ja";
import { ko } from "./ko";

export * from "./types";

const DICTIONARIES: Record<Language, Dictionary> = {
  en, tr, de, fr, es, "es-MX": esMX, it, "pt-BR": ptBR, nl, ja, ko,
};
const STORAGE_KEY = "atleva-language";

function isLanguage(value: string | null | undefined): value is Language {
  return !!value && (LANGUAGES as readonly string[]).includes(value);
}

/** Maps a browser language tag (en-GB, es-AR, pt-PT, nl-BE…) to the closest site language. */
export function matchLanguage(tag: string): Language | null {
  const lower = tag.toLowerCase();
  const exact = LANGUAGES.find((language) => language.toLowerCase() === lower);
  if (exact) return exact;
  const [base, region = ""] = lower.split("-");
  switch (base) {
    case "es":
      return region === "es" || region === "" ? "es" : "es-MX"; // Latin America and the US
    case "pt":
      return "pt-BR";
    default:
      return isLanguage(base) ? base : null;
  }
}

/** ?lang=de, then the saved choice, then the browser languages, then English. */
function detect(): Language {
  const query = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(query)) return query;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall through.
  }
  for (const preferred of navigator.languages ?? [navigator.language]) {
    const match = matchLanguage(preferred);
    if (match) return match;
  }
  return "en";
}

interface LanguageContextValue {
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detect);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore: the choice just won't be remembered.
    }
    // Keep shared links in the chosen language.
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
  };

  return (
    <LanguageContext.Provider value={{ language, t: DICTIONARIES[language], setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

/** Same page in the current language — used for internal links so ?lang survives navigation. */
export function useLocalizedHref() {
  const { language } = useLanguage();
  return (path: string) => {
    const [base, hash] = path.split("#");
    return `${base}?lang=${language}${hash ? `#${hash}` : ""}`;
  };
}
