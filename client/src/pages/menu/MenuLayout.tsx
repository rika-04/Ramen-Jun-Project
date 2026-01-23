import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ScrollToTopButton } from "../../components/ScrollToTopBtn";


const toSuperscript = (n: number) => {
  const map: Record<string, string> = {
    "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  };
  return String(n).split("").map((d) => map[d] ?? d).join("");
};

const allergensToSuperscript = (arr?: number[]) => {
  if (!arr?.length) return "";
  const cleaned = Array.from(new Set(arr)).sort((a, b) => a - b);
  return cleaned.map(toSuperscript).join("");
};

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  img?: string;
  allergens?: number[];
};


export type MenuSectionHeader = {
  type: "header";
  title: string;
  desc?: string;           // optional small description under the header
};

export type MenuRow = MenuItem | MenuSectionHeader;

export type MenuGroup = {
  description?: string;
  items: MenuRow[];
};
export type MenuData = Record<
  string, // Category (Ramen, Sides, ...)
  Record<string, MenuGroup> // Subcategory (Tonkotsu Ramen, ...)
>;



type Props = {
  locationLabel: string; // "Ramen Jun Red" / "Ramen Jun Westend"
  menu: MenuData;
};

export default function MenuLayout({ locationLabel, menu }: Props) {
  const categories = useMemo(() => Object.keys(menu) as (keyof typeof menu)[], [menu]);

  const [active, setActive] = useState<string>(String(categories[0]));
  const [subActive, setSubActive] = useState<string>("");
  const [preview, setPreview] = useState<MenuItem | null>(null);

  const subcategories = useMemo(() => {
    const subs = Object.keys(menu[active] ?? {});
    return subs;
  }, [menu, active]);

  useEffect(() => {
    setSubActive(String(subcategories[0] ?? ""));
  }, [active, subcategories]);

  useEffect(() => {
    setPreview(null);
  }, [active, subActive]);

  const section = (menu[active]?.[subActive] ?? { items: [] }) as MenuSection;
  const items = section.items ?? [];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block"
        >
          {locationLabel}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          Our Menu
        </motion.h1>

        {/* Top Category Tabs - Scrollable on Mobile, Centered on Desktop */}
        <div className="flex overflow-x-auto flex-nowrap md:justify-center gap-12 mt-10 pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {categories.map((cat) => {
            const catStr = String(cat);
            const isActive = active === catStr;

            return (
              <button
                key={catStr}
                onClick={() => setActive(catStr)}
                type="button"
                className={`
                  relative pb-2 whitespace-nowrap
                  text-sm uppercase tracking-[0.3em]
                  transition-colors
                  ${isActive ? "text-red-600" : "text-muted-foreground hover:text-white"}
                `}
              >
                {catStr}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1px] w-full
                    transition-opacity
                    ${isActive ? "bg-red-600 opacity-100" : "opacity-0"}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* Subcategory Tabs with Mobile Scroll and Desktop Centering */}
        {subcategories.length > 1 && (
          <div className="flex overflow-x-auto flex-nowrap md:justify-center gap-8 mt-7 pb-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {subcategories.map((sub) => {
              const isSubActive = subActive === sub;

              return (
                <button
                  key={sub}
                  onClick={() => setSubActive(sub)}
                  type="button"
                  className={`whitespace-nowrap relative pb-2 text-xs uppercase tracking-[0.28em] transition-colors ${
                    isSubActive ? "text-white" : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {sub}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] w-full transition-opacity ${
                      isSubActive ? "bg-red-600 opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${subActive}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Category heading */}
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-3xl font-serif italic text-primary">
                {active}
                {subcategories.length > 1 ? (
                  <span className="text-muted-foreground not-italic font-sans text-base ml-3">
                    / {subActive}
                  </span>
                ) : null}
              </h2>
              <div className="h-[1px] flex-1 bg-border" />
            </div>

            {/* Subcategory description (bigger gap before list) */}
            {section.description ? (
              <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed mb-10">
                {section.description}
              </p>
            ) : null}

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
              {/* LEFT list */}
              <div className="space-y-8">
                {items.map((row, idx) => {
                  // HEADER ROW
                  if ("type" in row && row.type === "header") {
                    return (
                      <div key={`header-${idx}`} className="pt-2 pb-6">
                        <div className="flex items-center gap-6">
                          <h3 className="text-xl md:text-2xl font-serif tracking-wide">
                            {row.title}
                          </h3>
                          <div className="h-[1px] flex-1 bg-border/60" />
                        </div>

                        {row.desc ? (
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                            {row.desc}
                          </p>
                        ) : null}
                      </div>
                    );
                  }

                  // NORMAL ITEM ROW
                  const item = row; // row is MenuItem here

                  return (
                    <button
                      
                      key={item.name}
                      type="button"
                      onClick={() => item.img && setPreview(item)}
                      onMouseEnter={() => item.img && setPreview(item)}
                      className="w-full text-left border-b border-border/60 pb-6 focus:outline-none"
                    >

                      {/* Show image on mobile ONLY */}
                      {item.img && (
                        <div className="block lg:hidden w-full aspect-video mb-4 overflow-hidden border border-border/40">
                          <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif leading-tight">
                            {item.name}

                            {item.allergens?.length ? (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  document
                                    .getElementById("allergens")
                                    ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="ml-3 text-white/80 text-sm md:text-base font-semibold tracking-[0.15em] hover:text-white transition-colors"
                                aria-label="Scroll to allergen legend"
                                title="See allergen legend"
                              >
                                {allergensToSuperscript(item.allergens)}
                              </button>
                            ) : null}
                          </h3>
                        </div>

                        {item.price ? (
                          <span className="text-sm text-muted-foreground whitespace-nowrap">
                            €{item.price}
                          </span>
                        ) : null}
                      </div>

                      {item.desc?.trim() ? (
                        <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      ) : null}

                      {item.img ? (
                        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-red-600/80">
                          View photo
                        </p>
                      ) : null}
                    </button>
                  );
                })}

              </div>

              {/* RIGHT preview */}
              <div className="sticky top-28 hidden lg:block">
                        <div className="border border-border/60 bg-black/20 p-3">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={preview?.img || "default-image"}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              src={preview?.img || "/images/MenuDefault.jpg"} 
                              alt={preview?.name || "Ramen Jun"}
                              className="w-full h-[420px] object-cover"
                            />
                          </AnimatePresence>
                        </div>

                        <div className="mt-4 min-h-[60px]">
                          <div className="text-sm uppercase tracking-[0.3em] text-red-600">
                            {preview?.name || "Welcome to Ramen Jun"}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {preview?.desc || "Explore our traditional Japanese flavors. Hover over any dish to see a preview."}
                          </p>
                        </div>
                      </div>
                    </div> {/* Added this missing div to close the 'Content' grid */}
                  </motion.div>
                </AnimatePresence>
              </div>

      {/* Allergens footer (centered) */}
      <div
        id="allergens"
        className="max-w-2xl mx-auto mt-24 px-6 text-center border-t border-border pt-8 scroll-mt-28"
      >
        <p className="mb-3 text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Allergene
        </p>

        <p className="text-xs leading-relaxed text-muted-foreground/80">
          1 mit Farbstoff · 2 enthält Koffein · 3 mit Säuerungsmittel (enthält eine Phenylalaninquelle) ·
          4 mit Antioxidationsmittel · 5 mit Aromen · 6 mit Geschmacksverstärker ·
          7 mit Konservierungsstoffen · 8 mit Stabilisatoren
        </p>
      </div>
      <ScrollToTopButton />
    </div>
    </div>
  );
}
