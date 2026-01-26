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
  const [showResModal, setShowResModal] = useState(false);

  const withLang = (path: string) => `/${lang}${path}`;

  const switchLang = () => {
    const next = lang === "en" ? "de" : "en";
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
    { href: withLang("/ourStory"), label: copy.nav.ourStory },
  ];

return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
        }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href={withLang("")} className="group">
            <span className="font-serif text-white text-xl md:text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-3">
              <img src={Logo} alt="Ramen Jun" className="h-8 md:h-10 w-auto" />
              <span className="hidden sm:inline">Ramen Jun</span>
            </span>
          </Link>

          {/* Desktop Nav Group */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                      location === link.href ? "text-primary" : "text-white/70 hover:text-white"
                    }`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="w-[1px] h-4 bg-white/20" />

            {/* Language Switcher */}
            <button type="button" onClick={switchLang} className="group flex items-center gap-2 text-[10px] font-bold tracking-widest transition-colors">
              <span className={lang === "en" ? "text-primary" : "text-white/40 group-hover:text-white/60"}>EN</span>
              <span className="text-white/10">|</span>
              <span className={lang === "de" ? "text-primary" : "text-white/40 group-hover:text-white/60"}>DE</span>
            </button>

            {/* TRIGGER: Set state to true instead of Link wrap */}
            <button 
              onClick={() => setShowResModal(true)}
              className="border border-primary text-primary px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300"
            >
              {copy.nav.reserve}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* RESERVATION MODAL: Use AnimatePresence for the cinematic feel */}
      <AnimatePresence>
        {showResModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full text-center p-12 border border-white/10 relative"
            >
              <button 
                onClick={() => setShowResModal(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                {lang === 'de' ? 'Tisch Reservieren' : 'Book a Table'}
              </span>
              <h2 className="text-white font-serif text-4xl md:text-5xl mb-12 ">
                Choose Location
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Westend Card */}
                <a 
                  href="https://www.quandoo.de/en/place/ramen-jun-56012/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_DE_SEM_MER_10000420_ADWORDS_10056012&gad_source=1&gad_campaignid=9831700954&gbraid=0AAAAADrCpnbq85rRfjAKLi6ghNgMCASzd&gclid=Cj0KCQiAvtzLBhCPARIsALwhxdop6e2hHDDXNNKk_R7-0iRPP0ayjzh3bykn0nxSm2z8J-Z-XoZktkYaAmiMEALw_wcB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-8 border border-white/5 bg-white/5 hover:border-primary transition-all duration-500"
                >
                  <h3 className="text-white font-serif text-2xl mb-2 ">Ramen Jun Westend</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">Original House</p>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select &rarr;</span>
                </a>

                {/* Red Card */}
                <a 
                  href="https://www.quandoo.de/en/place/ramen-jun-red-56011/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_DE_SEM_MER_10000420_ADWORDS_10056011&gad_source=1&gad_campaignid=9824926478&gbraid=0AAAAADrCpnbd6dm1m0WgwIX3w4dLzcuRK&gclid=Cj0KCQiAvtzLBhCPARIsALwhxdpcjjNJQrEzAQ8ZWBnxLZG2CZcNSOLqILyijg6iVI-dxoIoWzBxDIMaAg58EALw_wcB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-8 border border-white/5 bg-white/5 hover:border-primary transition-all duration-500"
                >
                  <h3 className="text-white font-serif text-2xl mb-2 ">Ramen Jun Red</h3>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">City Center</p>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select &rarr;</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}