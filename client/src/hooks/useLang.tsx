import React, { createContext, useContext, useEffect, useMemo, useState,  type ReactNode,
 } from "react";
import { useLocation } from "wouter";

export type Lang = "en" | "de";

type LangContextValue = {
  lang: Lang;
  setLang: (next: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function detectLangFromPath(path: string): Lang {
  return path.startsWith("/de") ? "de" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();

  const [langState, setLangState] = useState<Lang>(() => {
    // 1) URL wins
    const fromPath = detectLangFromPath(location);
    // 2) else localStorage
    const saved = (localStorage.getItem("lang") as Lang | null) ?? null;
    return saved ?? fromPath ?? "en";
  });

  // Keep state in sync if user navigates manually to /en/... or /de/...
  useEffect(() => {
    const fromPath = detectLangFromPath(location);
    if (fromPath !== langState) setLangState(fromPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const setLang = (next: Lang) => {
    localStorage.setItem("lang", next);
    setLangState(next);

    // rewrite current url: /en/x -> /de/x (or add prefix if missing)
    const parts = location.split("/").filter(Boolean); // ["en","menu","red"]
    const first = parts[0];
    const rest = (first === "en" || first === "de") ? parts.slice(1) : parts;

    const nextPath = `/${next}${rest.length ? `/${rest.join("/")}` : ""}`;
    navigate(nextPath, { replace: true });
  };

  const value = useMemo(() => ({ lang: langState, setLang }), [langState]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
