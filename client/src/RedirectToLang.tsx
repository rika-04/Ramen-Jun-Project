import { useEffect } from "react";
import { useLocation } from "wouter";
import { useLang } from "./hooks/useLang";

export default function RedirectToLang() {
  const [, navigate] = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    navigate(`/${lang}`, { replace: true });
  }, [lang, navigate]);

  return null;
}
