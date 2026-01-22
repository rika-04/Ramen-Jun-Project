import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/RamenJun_Logo.jpg";
import { useLang } from "../hooks/useLang";
import { t } from "../i18n";

export function Navigation() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const copy = t(lang);

  const withLang = (path: string) => `/${lang}${path}`;

  const switchLang = () => {
    const next = lang === "en" ? "de" : "en";

    // replace the leading /en or /de with the new language
    const nextPath = location.match(/^\/(en|de)(\/|$)/)
      ? location.replace(/^\/(en|de)(?=\/|$)/, `/${next}`)
      : `/${next}${location === "/" ? "" : location}`;

    setLang(next);
    setLocation(nextPath);
  };


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: withLang(""), label: copy.nav.home },
    { href: withLang("/menu"), label: copy.nav.menu },
    { href: withLang("/location"), label: copy.nav.location },
    { href: withLang("/contact"), label: copy.nav.contact },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 transition-all duration-500 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40 py-3" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={withLang("")} className="group">
            <span className="font-serif text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2">
              <img src={Logo} alt="Ramen Jun" className="h-8 w-auto" />
              Ramen Jun
            </span>
          </Link>

          <button
            type="button"
            onClick={switchLang}
            className="ml-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
            aria-label="Switch language"
            title={lang === "en" ? "Deutsch" : "English"}
          >
            <Globe size={18} />
            <span className="tracking-[0.2em] uppercase">{lang === "en" ? "DE" : "EN"}</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`${location === link.href ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"} text-sm font-medium tracking-wide uppercase cursor-pointer relative py-1`}
                >
                  {link.label}
                </span>
              </Link>
            ))}

            <Link href={withLang("/")}>
              <button className="bg-primary text-primary-foreground px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                {copy.nav.reserve}
              </button>
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* mobile menu stays the same, but use links[] that already have lang */}
    </>
  );
}
