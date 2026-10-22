import { useEffect, useState } from "react";
import type { Language } from "../i18n/types";

export type Block = { p: string } | { ul: string[] };
export interface LegalDocument {
  title: string;
  updated: string;
  intro: Block[];
  sections: { title: string; blocks: Block[] }[];
}
export type LegalKind = "privacy" | "terms" | "support";
type LegalSet = Record<LegalKind, LegalDocument>;

// Texts synced from the app repository's legal/ folder (`npm run sync`); one chunk per language, loaded on demand.
const loaders = import.meta.glob<LegalSet>("./legal/*.json", { import: "default" });

/** The legal document for the current language, or null while its chunk loads. */
export function useLegal(language: Language, kind: LegalKind): LegalDocument | null {
  const [doc, setDoc] = useState<LegalDocument | null>(null);
  useEffect(() => {
    let active = true;
    setDoc(null);
    loaders[`./legal/${language}.json`]().then((set) => active && setDoc(set[kind]));
    return () => {
      active = false;
    };
  }, [language, kind]);
  return doc;
}
