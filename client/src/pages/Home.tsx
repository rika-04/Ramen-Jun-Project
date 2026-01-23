import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Gallery from "@/components/Gallery";
import { t } from "../i18n";
import { useLang } from "../hooks/useLang";

export default function Home() {
  const { lang } = useLang();
  const withLang = (path: string) => `/${lang}${path}`;
  const copy = t(lang);
  const primaryBtn =
    "px-10 py-4 min-w-[280px] border border-primary bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.22em] transition-all transform hover:-translate-y-1 hover:bg-primary/90";

  const secondaryBtn =
    "px-10 py-4 min-w-[220px] border border-primary bg-transparent text-primary text-sm font-bold uppercase tracking-[0.22em] transition-all transform hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background stack */}
        <div className="absolute inset-0 z-0">
          {/* Image */}
          <div
            className="absolute inset-0 bg-center bg-cover opacity-[0.9] grayscale blur-[0px]"
            style={{ backgroundImage: 'url("/images/ramen/Ramen_MisoDeluxeRamen.jpg")' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-primary/30" />
        </div>




        {/* HERO CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 text-white/80"
          >
            {copy.hero.taste}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight"
          >
            Ramen <span className="text-primary">Jun</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            {copy.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                {copy.reserve.reserve}
              </span>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.quandoo.de/en/place/ramen-jun-red-56011/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_DE_SEM_MER_10000420_ADWORDS_10056011&gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz19V42vjjV9KrcKa-LPn8JQGntHvD01EjbooO3FsdZLyGdE48OysKPMaAl_yEALw_wcB&gclsr="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-10 py-4 min-w-[260px] bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary/90 transition-all">
                    Red
                  </button>
                </a>

                <a
                  href="https://www.quandoo.de/en/place/ramen-jun-56012/menu?utm_source=google&utm_medium=cpc&utm_campaign=EN_DE_SEM_MER_10000420_ADWORDS_10056012&gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz180PM_TxF9V21qEgAZVDYUdXBeM41QU0dfwbDe2YK7BjzgqPkGAdfgaApIbEALw_wcB&gclsrc=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-10 py-4 min-w-[260px] bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary/90 transition-all">
                    Westend
                  </button>
                </a>
              </div>
            </div>
             {/* VIEW MENU */}
              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  {copy.reserve.menu}
                </span>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={withLang("/menu/red")}>
                    <button className="px-10 py-4 min-w-[200px] border border-primary text-primary text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary hover:text-primary-foreground transition-all">
                      Red
                    </button>
                  </Link>

                  <Link href={withLang("/menu/westend")}>
                    <button className="px-10 py-4 min-w-[200px] border border-primary text-primary text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary hover:text-primary-foreground transition-all">
                      Westend
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
        </div>

        {/* Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop"
              alt="Culinary Detail"
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">{copy.story.title}</h2>
            <div className="w-12 h-[2px] bg-primary/20"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {copy.story.text1}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {copy.story.text2}
            </p>
            <Link href={withLang("/location")}>
              <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm border-b border-primary/20 pb-1 hover:border-primary transition-all cursor-pointer mt-4">
                Visit Us <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      
      {/* GALLERY */}
      <Gallery />

    
      {/* Featured Section */}
        <section className="py-24 px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">
              {copy.signature_dish.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">{copy.signature_dish.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Miso Deluxe Ramen",
                  desc: "Hand-pulled noodles, 24-hour tonkotsu broth, black truffle oil.",
                  img: "images/ramen/Ramen_MisoDeluxeRamen.jpg"
                },
                {
                  title: "Karaage",
                  desc: "A5 Miyazaki Wagyu, lightly seared, ponzu citrus glaze.",
                  img: "images/sides/Side_Karaage.jpg"
                },
                {
                  title: "Veggie White Ramen",
                  desc: "Kyoto matcha soaked ladyfingers, mascarpone cream.",
                  img: "images/ramen/Ramen_VeggieWhiteRamen.jpg"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="overflow-hidden mb-6 aspect-[4/5] relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 duration-500"></div>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-16">
              <Link href={withLang("/menu")}>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                  className="px-8 py-3 border border-foreground text-foreground text-sm font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all">
                  View Full Menu
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
