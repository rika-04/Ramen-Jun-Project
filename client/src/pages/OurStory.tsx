import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { t } from "@/i18n";

// Move milestones to top level so JourneyTimeline can see them
const milestones = [
  { year: "1993-1994", title: "The Beginning", label: { en: "Founded in Tsubame Niigata, Japan", de: "Gegründet in Tsubame Niigata, Japan" }, side: "left" },
  { year: "2000", title: "Craftsmanship", label: { en: "Launched a noodle factory in Japan", de: "Eröffnung einer Nudelfabrik in Japan" }, side: "right" },
  { year: "2003", title: "Tokyo Expansion", label: { en: "First Ramen Jun opened in Tokyo", de: "Erstes Ramen Jun in Tokio eröffnet" }, side: "left" },
  { year: "2006", title: "Innovation", label: { en: "First cup noodle was released in Japan", de: "Erste Cup-Nudel-Markteinführung in Japan" }, side: "right" },
  { year: "2008", title: "Heritage", label: { en: "First Jun's Japanese cuisine restaurant", de: "Erstes japanisches Spezialitätenrestaurant" }, side: "left" },
  { year: "2010", title: "New Horizons", label: { en: "Launched Ramen Jun's frozen ramen", de: "Markteinführung von Tiefkühl-Ramen" }, side: "right" },
  { year: "2015", title: "Guten Tag!", label: { en: "First Ramen Jun in Germany (Westend)", de: "Erstes Ramen Jun in Deutschland (Westend)" }, side: "left" },
  { year: "2017", title: "Expanding Frankfurt", label: { en: "Second Ramen Jun in Germany (Red)", de: "Zweites Ramen Jun in Deutschland (Red)" }, side: "right" },
  { year: "2024", title: "Today", label: { en: "Latest shop opened in Niigata Station", de: "Neueste Eröffnung im Bahnhof Niigata" }, side: "left" }
];

function CompactJourney({ lang }: { lang: string }) {
  return (
    <section className="pt-12 py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-24 text-white">
          Our Journey
        </h2>

        {/* Horizontal Container: Scrollable on mobile, spread on desktop */}
        <div className="relative pt-12 pb-20">
          {/* Central Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />

          <div className="flex justify-between items-start gap-4 overflow-x-auto no-scrollbar pb-8 px-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-none w-56 relative flex flex-col items-center"
              >
                {/* Year and Label: Staggered Above (even) and Below (odd) */}
                <div className={`text-center flex flex-col items-center ${
                  i % 2 === 0 ? 'mb-20' : 'mt-20 order-last'
                }`}>
                  <span className="text-primary font-bold text-2xl tracking-tighter mb-2">
                    {m.year}
                  </span>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 leading-relaxed px-4 max-w-[180px]">
                    {m.label[lang as 'en' | 'de']}
                  </p>
                </div>

                {/* The Timeline Point (Dot) on the central line */}
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black z-10 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />

                {/* Vertical Stem connecting content to the dot */}
                <div className={`w-[1px] bg-white/20 absolute top-1/2 h-14 ${
                  i % 2 === 0 ? '-translate-y-full' : ''
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyConclusion({ lang }: { lang: string }) {
  return (
    <section className="py-12 bg-black text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto px-6"
      >
        <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed tracking-wide">
          {lang === 'de' 
            ? "Jeder erreichte Meilenstein ist ein Zeugnis für die Leidenschaft von Ramen Jun, unvergessliche kulinarische Erlebnisse zu schaffen – Schale für Schale." 
            : "Every milestone reached is a testament to Ramen Jun's passion for crafting unforgettable culinary experiences, one bowl at a time."}
        </p>
      </motion.div>
    </section>
  );
}

export default function About() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Calligraphy */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/people/TasteTesting.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block"
          >
            <h2 className="text-white text-7xl lg:text-9xl font-japanese tracking-tighter opacity-80 select-none" 
                style={{ writingMode: 'vertical-rl' }}>
              一麺入魂
            </h2>
          </motion.div>
          <div className="ml-0 md:ml-12 mt-auto mb-24 md:mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              {lang === 'de' ? 'Unsere Philosophie' : 'Our Philosophy'}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-5xl md:text-7xl font-serif text-white"
            >
              {lang === 'de' ? 'Die Geschichte' : 'The Story'}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Our Philosophy: Ichi-Men-Nyu-Kon */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Our Motto</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { kanji: "一", romaji: "ichi", meaning: lang === 'de' ? "eins" : "one" },
              { kanji: "麺", romaji: "men", meaning: lang === 'de' ? "nudeln" : "noodles" },
              { kanji: "入", romaji: "nyu", meaning: lang === 'de' ? "hineingeben" : "putting" },
              { kanji: "魂", romaji: "kon", meaning: lang === 'de' ? "seele" : "soul" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{item.romaji}</span>
                <span className="text-6xl md:text-8xl font-japanese text-primary mb-4">{item.kanji}</span>
                <span className="text-sm italic text-muted-foreground">{item.meaning}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {lang === 'de' 
              ? "Für uns ist es eine weitere Schüssel Ramen unter Hunderten. Aber für unsere Kunden ist diese Schüssel einzigartig. Wir legen unser Herz und unsere Seele in jede Zubereitung."
              : "To us, it's another bowl among hundreds. But for our customers, that bowl is unique. We pour our hearts and souls into every ramen we prepare."}
          </p>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif mb-6 italic text-white">The Vision of Jun-san</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ramen Jun was born from a desire to bring the most authentic soul of Japanese ramen to the heart of Frankfurt. 
                Our founder, Jun-san, believes that a bowl of ramen is more than just a meal—it is a craft perfected through patience.
              </p>
            </motion.div>
            <div className="border border-border p-2">
              <img src="/images/locations/LogoAesthetic.jpg" alt="Jun San at work" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>

         {/* Integrated Journey Timeline Component */}
         <CompactJourney lang={lang} />
        <JourneyConclusion lang={lang} />


        {/* Ingredient Grid */}
        <div className="max-w-5xl mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/ingredients/Noodle.jpg", label: lang === 'de' ? 'Hausgemachte Nudeln' : 'House-made Noodles' },
              { src: "/images/ingredients/Onion.jpg", label: lang === 'de' ? 'Frische Zutaten' : 'Fresh Ingredients' },
              { src: "/images/ingredients/Miso.jpg", label: lang === 'de' ? 'Traditionelles Miso' : 'Traditional Miso' }
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/2] overflow-hidden border border-border/40 relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110" 
                  />
                </div>
                <p className="mt-4 text-xs font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-primary transition-colors">
                  {img.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}