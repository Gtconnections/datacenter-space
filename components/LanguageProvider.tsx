"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { dict, Lang, Dict } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  // Detect browser language once on mount (in-memory only, no storage).
  useEffect(() => {
    const nav = navigator.language?.toLowerCase() ?? "";
    if (nav.startsWith("en")) setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: Ctx = {
    lang,
    setLang,
    toggle: () => setLang((p) => (p === "es" ? "en" : "es")),
    t: dict[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
