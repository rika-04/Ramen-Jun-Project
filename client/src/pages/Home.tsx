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
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* 1. Background Image - Layer 0 */}
          {/* 1. Background Image - Layer 0 */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-no-repeat z-0" // Removed bg-cover to let position work better
            style={{ 
              backgroundImage: 'url("/images/locations/LogoAesthetic.jpg")',
              backgroundSize: 'cover', // Applied here instead of className
              backgroundPosition: '100% center', // 100% is equivalent to 'right'
              filter: 'brightness(0.7) contrast(1.1)' 
            }}
          />

            {/* 2. Dark Overlays - Layer 10 (Sits between image and text) */}
            <div className="absolute inset-0 bg-black/60 z-10" /> 
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />

            {/* 3. Main Content Container - Layer 20 (Sits on top of everything) */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
              {/* Calligraphy and Text will now be perfectly bright */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden md:block"
            >
              <h2 className="text-white text-8xl lg:text-[10rem] font-japanese tracking-tighter opacity-80 select-none leading-none" 
                  style={{ writingMode: 'vertical-rl' }}>
                一麺入魂
              </h2>
            </motion.div>

            {/* Main Content - Shifted left for the asymmetrical "Story" look */}
            <div className="ml-0 md:ml-16 max-w-xl">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
              >
                {lang === 'de' ? 'Tradition Trifft Moderne' : 'The Art of Ramen'}
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-6xl md:text-8xl font-serif text-white mb-8"
              >
                Ramen <span className="text-primary">Jun</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-white/70 text-lg leading-relaxed mb-12 max-w-md"
              >
                {lang === 'de' 
                  ? 'In Frankfurt verwurzelt, in Japan inspiriert. Wir bringen die Seele Tokios in jede Schüssel.'
                  : 'Rooted in Frankfurt, inspired by Japan. Bringing the soul of Tokyo to every bowl.'}
              </motion.p>

              {/* Simplified Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href={withLang("/menu")}>
                  <button className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-red-700 transition-all">
                    {lang === 'de' ? 'Speisekarte' : 'View Menu'}
                  </button>
                </Link>
                <Link href={withLang("/location")}>
                  <button className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                    {lang === 'de' ? 'Standorte' : 'Locations'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

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

      {/* Founder's Spotlight - Dark Theme */}
      <section className="py-24 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Centered Image with a subtle glow instead of a shadow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12 inline-block relative group"
          >
            <div className="absolute -inset-1 bg-primary/20 rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/images/people/TasteTesting.jpg" 
              alt="Founder Junichi Matsumoto"
              className="relative max-w-full h-auto rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* The Quote with elegant typography */}
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-2xl md:text-4xl font-serif leading-relaxed text-white/90">
              "I want to serve good ramen to make people smile. This was my start, and this is an everyday challenge since."
            </p>

            <div className="flex flex-col items-center gap-3">
              <span className="h-[1px] w-16 bg-primary" />
              <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-primary">
                Junichi Matsumoto
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-widest">
                The Soul Behind the Bowl
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* GALLERY */}
      <Gallery />

      {/* Visual Break: Philosophy */}
      {/* Philosophy Break - With Redirect */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8">
            {lang === 'de' ? 'Das Geheimnis' : 'The Secret'}
          </h2>
          <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight mb-12">
            {lang === 'de' 
              ? "Echte Handwerkskunst braucht Zeit." 
              : "True craftsmanship takes time."}
          </p>

          <Link href={withLang("/OurStory")}>
            <button className="px-10 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500">
              {lang === 'de' ? 'Entdecken Sie unsere Reise' : 'Discover Our Journey'}
            </button>
          </Link>
        </div>
      </section>

    
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
