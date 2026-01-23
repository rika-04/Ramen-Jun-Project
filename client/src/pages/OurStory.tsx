import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { t } from "@/i18n";

export default function About() {
  const { lang } = useLang();
  const copy = t(lang);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/people/TasteTesting.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block"
          >
            {lang === 'de' ? 'Unsere Geschichte' : 'Our Story'}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white"
          >
            Ramen Jun
          </motion.h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif mb-6 italic">The Vision of Jun-san</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ramen Jun was born from a desire to bring the most authentic soul of Japanese ramen to the heart of Frankfurt. 
              Our founder, Jun-san, believes that a bowl of ramen is more than just a meal—it is a craft perfected through patience.
            </p>
          </motion.div>
          <div className="border border-border p-2">
            <img src="/images/locations/LogoAesthetic.jpg" alt="Jun San at work" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Fresh Ingredients Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-4xl font-serif mb-8">Fresh. House-made. Daily.</h2>
          <div className="h-[1px] w-24 bg-primary mx-auto mb-10" />
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            We don't take shortcuts. Our noodles are made fresh in-house every morning using premium flour to ensure the perfect "bite." 
            Our broths simmer for over 24 hours, extracting every ounce of flavor to create the rich, creamy texture our guests love.
          </p>
        </motion.div>
      </section>
      {/* Three-Image Grid */}
        <div className="max-w-5xl mx-auto px-4 mt-12 mb-24"> {/* Added max-width and margins for better balance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Reduced gap slightly */}{[
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
    </div>
  );
}