import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { t } from "@/i18n";

export default function MenuLocationSelect() {
  const { lang } = useLang();
  const withLang = (path: string) => `/${lang}${path}`;
  const copy = t(lang);

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-black overflow-hidden">
      {/* Ramen Jun Red Section */}
      <Link href={withLang("/menu/red")} className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("/images/locations/JunRed.jpg")' }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

        <div className="relative h-full min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Ramen Jun Red
          </motion.h2>
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8">
            {lang === 'de' ? 'Das Flaggschiff' : 'The Flagship Store'}
          </p>
          <div className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.22em] text-sm group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
            {lang === 'de' ? 'Speisekarte ansehen' : 'View Menu'}
          </div>
          <p className="mt-8 text-white/60 text-sm max-w-xs italic leading-relaxed">
            "Our flagship store in the heart of Frankfurt."
          </p>
        </div>
      </Link>

      {/* Ramen Jun Westend Section */}
      <Link href={withLang("/menu/westend")} className="relative flex-1 group cursor-pointer overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("/images/locations/JunWestend.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

        <div className="relative h-full min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            Ramen Jun Westend
          </motion.h2>
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8">
            {lang === 'de' ? 'Modern & Minimalistisch' : 'Modern & Minimalist'}
          </p>
          <div className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-[0.22em] text-sm group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
            {lang === 'de' ? 'Speisekarte ansehen' : 'View Menu'}
          </div>
          <p className="mt-8 text-white/60 text-sm max-w-xs italic leading-relaxed">
            "Modern dining near the Palmengarten."
          </p>
        </div>
      </Link>
    </div>
  );
}