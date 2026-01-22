import { Link } from "wouter";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/useLang";
import { t } from "@/i18n"


export default function MenuLocationSelect() {
  const { lang } = useLang();
  const withLang = (path: string) => `/${lang}${path}`;
  const copy = t(lang);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          {copy.menulocation.title}
        </motion.h1>

        <p className="text-muted-foreground mb-12">
          {copy.menulocation.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href={withLang("/menu/red")}>
            <button className="px-10 py-4 min-w-[260px] bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary/90 transition-all">
              Ramen Jun Red
            </button>
          </Link>

          <Link href={withLang("/menu/westend")}>
            <button className="px-10 py-4 min-w-[260px] bg-primary text-primary-foreground text-sm font-bold uppercase tracking-[0.22em] hover:bg-primary/90 transition-all">
              Ramen Jun Westend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
