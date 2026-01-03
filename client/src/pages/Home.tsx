import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {/* Background - using a dark overlay on an Unsplash image */}
        <div className="absolute inset-0 z-0">
          {/* Authentic japanese restaurant interior dark moody */}
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 text-white/80"
          >
            Taste the Harmony
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight"
          >
            Zen Dining
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Where traditional Japanese craftsmanship meets modern culinary innovation.
            An experience for the senses.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all transform hover:-translate-y-1">
                Reserve a Table
              </button>
            </Link>
            <Link href="/menu">
              <button className="px-8 py-4 bg-transparent border border-white text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:-translate-y-1">
                View Menu
              </button>
            </Link>
          </motion.div>
        </div>

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
            {/* Chef plating food close up detail */}
            <img 
              src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop" 
              alt="Culinary Detail" 
              className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">The Art of Simplicity</h2>
            <div className="w-12 h-[2px] bg-primary/20"></div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that true luxury lies in simplicity. Our philosophy is rooted in "Shun" (旬) — the celebration of ingredients at their peak of flavor. 
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every dish is a carefully composed poem, stripping away the unnecessary to reveal the essence of nature's bounty.
            </p>
            <Link href="/location">
              <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm border-b border-primary/20 pb-1 hover:border-primary transition-all cursor-pointer mt-4">
                Visit Us <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase mb-4 block">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-16">Signature Dishes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Truffle Ramen",
                desc: "Hand-pulled noodles, 24-hour tonkotsu broth, black truffle oil.",
                img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop"
              },
              {
                title: "Wagyu Tataki",
                desc: "A5 Miyazaki Wagyu, lightly seared, ponzu citrus glaze.",
                img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?q=80&w=2080&auto=format&fit=crop"
              },
              {
                title: "Matcha Tiramisu",
                desc: "Kyoto matcha soaked ladyfingers, mascarpone cream.",
                img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?q=80&w=1974&auto=format&fit=crop"
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
            <Link href="/menu">
              <button className="px-8 py-3 border border-foreground text-foreground text-sm font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
