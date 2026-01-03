import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/location", label: "Location" },
    { href: "/contact", label: "Contact" },
  ];

  const navClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4
    ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40 py-3" : "bg-transparent"}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif italic text-sm">
                Z
              </span>
              Zen Dining
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`
                  text-sm font-medium tracking-wide uppercase cursor-pointer relative py-1
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] 
                  after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                  ${location === link.href ? "text-primary after:w-full font-bold" : "text-muted-foreground hover:text-foreground"}
                `}>
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-primary text-primary-foreground px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                Reserve Table
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className={`text-2xl font-serif cursor-pointer ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-border mx-auto my-4"></div>
              <p className="text-sm text-muted-foreground">
                123 Sakura Way, Tokyo District<br/>
                Open Daily 11am - 10pm
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
