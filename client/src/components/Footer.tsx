import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import { t } from "../i18n";



export function Footer() {
  
  const { lang } = useLang();
  const copy = t(lang);
  const withLang = (path: string) => `/${lang}${path}`;
  
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

        {/* Brand */}
        <div className="space-y-6">
          <Link href="/">
            <h3 className="text-3xl font-serif cursor-pointer">
              Ramen <span className="text-primary">Jun</span>
            </h3>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            {copy.footer.text}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-xs tracking-[0.3em] uppercase mb-6 text-white/60">
            {copy.footer.nav}
          </h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li><Link href="/" className="hover:text-primary transition-colors">{copy.nav.home}</Link></li>
            <li><Link href="/menu" className="hover:text-primary transition-colors">{copy.nav.menu}</Link></li>
            <li><Link href="/location" className="hover:text-primary transition-colors">{copy.nav.location}</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">{copy.nav.reserve}</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold text-xs tracking-[0.3em] uppercase mb-6 text-white/60">
            {copy.footer.visit_us}
          </h4>

          <div className="space-y-6 text-sm text-white/70">
            <div>
              <p className="font-semibold text-white">Ramen Jun Red</p>
              <p>Fahrgasse 89</p>
              <p>60311 Frankfurt am Main</p>
              <p className="pt-1">+49 6990436699</p>
            </div>

            <div>
              <p className="font-semibold text-white">Ramen Jun Westend</p>
              <p>Wilhelm-Hauff-Straße 10</p>
              <p>60325 Frankfurt am Main</p>
              <p className="pt-1">+49 6926918418</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-xs tracking-[0.3em] uppercase mb-6 text-white/60">
            {copy.footer.social}
          </h4>
          <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/ramenjun_de/?hl=en", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/Ramen.Jun.Red", label: "Facebook" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ramen Jun on ${label}`}
                    className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center
                               text-primary hover:bg-primary hover:text-black transition-all duration-300"
                  >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-primary/20
                      flex flex-col md:flex-row justify-between items-center gap-4
                      text-xs text-white/50">
        <p>© 2024 Ramen Jun. All rights reserved.</p>
        <p>Designed with simplicity in mind.</p>
      </div>
    </footer>
  );
}
