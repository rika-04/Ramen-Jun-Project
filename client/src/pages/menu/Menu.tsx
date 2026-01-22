import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const toSuperscript = (n: number) => {
  const map: Record<string, string> = {
    "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
  };
  return String(n).split("").map(d => map[d] ?? d).join("");
};

const allergensToSuperscript = (arr?: number[]) => {
  if (!arr?.length) return "";
  // Sort + unique so it’s clean
  const cleaned = Array.from(new Set(arr)).sort((a, b) => a - b);
  return cleaned.map(toSuperscript).join("");
};

type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  img?: string;
  allergens?: number[];
};

const MENU = {
  Ramen: {
    "Miso Ramen": {
      description: "Für unsere hausgemachte Miso Ramen benutzen wir Meister Jun's spezielle Misopaste extra aus Japan importiert. Alle Miso Ramen enthalten Schweinebrühe, Weizennudeln, 2 Chashu (Schweinefleischscheiben), Frühlingszwiebeln, Sojasprossen, Kikurage Pilze und Sesamkörner. Die scharfen Varianten werden mit einer hausgemachten Chilipaste serviert, welche einen extra scharfen und leckeren Geschmack verleiht.",
      items: [
      { name: "Miso Ramen", desc: "", price: "16,00", allergens: [4,6] },
      { name: "Spicy Miso Ramen", desc: "Spicy miso broth, ground pork, bean sprouts.", price: "18,00", allergens: [3,4,6] },
      { name: "Negi Miso Ramen", desc: "", price: "19,00" , allergens: [3,4,6]},
      { name: "Spicy Negi Miso Ramen", desc: "Miso Ramen mit scharfen Lauchzwiebeln", price: "21,00" , allergens: [3,4,6]},
      { name: "Negi Miso Chashu Ramen", desc: "", price: "22,30", allergens: [3,4,6] },
      { name: "Spicy Negi Miso Chashu Ramen", desc: "Miso Ramen mit scharfen Lauchzwiebeln und vier extra Scheiben Chashu Schweinefleisch", price: "24,30" , allergens: [3,4,6]},
      { name: "Miso Cheese Ramen", desc: "", price: "20,30", allergens: [4,6] },
      { name: "Spicy Miso Cheese Ramen", desc: "Miso Ramen mit Parmesankäse", price: "22,30" , allergens: [3,4,6]},
      { name: "Miso Chashu Ramen", desc: "", price: "18,80" , allergens: [4,6]},
      { name: "Spicy Miso Chashu Ramen", desc: "Miso Ramen mit vier extra Scheiben Chashu Schweinefleisch", price: "20,80" , allergens: [3,4,6]},
      { name: "Miso Deluxe Ramen", desc: "", price: "20,60", img: "/images/Ramen_MisoDeluxeRamen.jpg" , allergens: [4,6]},
      { name: "Spicy Miso Deluxe Ramen", desc: "Miso Ramen mit Miesmuscheln, Jakobsmuscheln, Garnelen, Mais und Butter anstatt Chashu Schweinefleisch und Mikurage Pilze", price: "22,60", allergens: [3,4,6] },
      ]
      },
    "Shio Ramen": {
      
      items:[
      { name: "Shio Ramen", desc: "Gesalzene Schweinebrühe mit Weizennudeln, zwei Scheiben Chashu Schweinefleisch, Frühlingszwiebeln, Kikurage Pilzen, Sojasprossen, Pakchoi, Mais und Butter", price: "18,00" , allergens: [6]},
      ] 
      },
    "Special Miso Ramen": {
      items:[
      { name: "Karaage Miso Ramen", desc: "", price: "20,80" },
      { name: "Spicy Karaage Miso Ramen", desc: "Miso Ramen mit drei Stück Karaage anstatt Chashu Schweinefleisch", price: "22,80", allergens: [3] },
      { name: "Yasai Miso Ramen", desc: "", price: "19,60", img: "/images/Ramen_YasaiMisoRamen.jpg" },
      { name: "Spicy Yasai Miso Ramen", desc: "Miso Ramen mit Gemüse (Karotten, Zwiebeln, Kohl, Sojasprossen, Zucchini) und Chashu Schweinefleisch im Wok zubereitet", price: "21,60", allergens: [3] },
      { name: "Seafood Miso Ramen", desc: "", price: "21,00" },
      { name: "Spicy Seafood Miso Ramen", desc: "Miso Ramen mit Miesmuscheln, Jakobsmuscheln, Garnelen, Mais und Butter anstatt Chashu Schweinefleisch und Kikurage Pilze", price: "23,00" , allergens: [3]},
      ]
      },
    "Veggie Ramen": {
      items:[
      { name: "Veggie Miso Ramen", desc: "", price: "17,50" },
      { name: "Spicy Veggie Miso Ramen", desc: "Vegetarische Brühe mit Misopaste, Weizennudeln, Frühlingszwiebeln, Tomaten, Paprika, Zwiebeln, Champignons, Kartoffeln, Auberginen, Zucchini, Bratpaprika, Sesam und Tofu", price: "19,50" },
      { name: "Veggie White Ramen", desc: "", price: "18,00", img: "/images/Ramen_VeggieWhiteRamen.jpg" },
      { name: "Spicy Veggie White Ramen", desc: "Vegetarische Brühe mit Misopaste, Weizennudeln, Sojamilch, Lauch, gerösteten Knoblauch, gerösteter Tomate, Kikurage Pilzen, Avocado und Sojaschnitzel (enthält Spuren von Ingewer, Pilzen und Chili)", price: "19,50", allergens: [3] },
      ]
    },
  },
  Sides: {
    "Vorspeisen":[
      { name: "Edamame", desc: "Sea salt.", price: "4,50" },
      { name: "Gyoza (3x/5x)", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Gemüse und Schweinefleisch", price: "5,20/8,50" },
      { name: "Shrimp Gyoza", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Garnelen, Gemüse und Schweinefleisch", price: "4.50" },
      { name: "Karaage (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert", price: "5,60/9,80" ,img:"/images/Side_Karaage.jpg"},
      { name: "Chicken Nanban (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei)", price: "6,80/11,00" },
      { name: "Chashu Mori", desc: "Würzige Schweinefleischscheiben (Chashu) angerichtet mit scharfen Lauchzwiebeln und Frühlingszwiebeln", price: "6,80" , img:"/images/Side_ChashuMori.jpg", allergens: [3]},
    ],
    "Salate":[
      { name: "Avocado Wasabi", desc: "Aufgeschnittene Avocado mit würzigem Wasabi-Dressing", price: "5,20" },
      { name: "Geröstete Tomaten & Knoblauch", desc: "Geröstete Tomaten und Knoblauch mit Avocado und würzigem Wasabi-Dressing", price: "7,80" },
      { name: "Gurken & Frühlingszwiebeln", desc: "Eingelegte Gurken und Frühlingszwiebeln mit Sesamöl-Dressing", price: "5,20" },
      { name: "Gurken & Sesam", desc: "Eingelegte Gurken in Scheiben mit Sesamöl-Dressing", price: "5,20" },
    ],
    "Donburi (Reisschüsseln)":[
      { name: "Negi Chashu Don (klein)", desc: "Chashu Schweinefleischscheiben, Frühlingszwiebeln, Sesamkörner und Sesamöl serviert mit Reis", price: "5,80" },
      { name: "Chicken Nanban Don (klein)", desc: "Saftiges Hühnerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei) serviert mit Reis", price: "7,20" },
    ],
  },
  Deserts: {
    All: [
      { name: "Eis", desc: "Sie können zwei Kugeln Eis in ihrer Lieblingskombination bestellen (Matcha, Schwarzsesam, Vanille)", price: "4,50", img: "/images/Desert_MatchaSesameIceCream.jpg" },
      { name: "Hausgemachte Dorayaki", desc: "Japanischer Pfannkuchen mit Azukibohnen", price: "4,50", img: "/images/Desert_Dorayaki.jpg" },
      { name: "Matcha Affogato", desc: "Vanilleeis mit Matcha Tee", price: "6,80" },
    ],
  },
  Drinks: {
    "Non-Alcoholic":[
      {name: "Wasser (mit Kohlensäure), 0,25L/0,75L", desc: "", price: "2,50/6,00"},
      {name: "Wasser (ohne Kohlensäure), 0,25L/0,75L", desc: "", price: "2,50/6,00"},
      {name: "Cola (fritz-kola), 0,33L", desc: "", price: "3,20"},
      {name: "Cola zuckerfrei (fritz-kola) 0,33L", desc: "", price: "3,20"},
      {name: "Bio Apfelschorle (fritz-kola) 0,33L", desc: "", price: "2,70"},
      {name: "Apfelsaft, 0,2L", desc: "", price: "2,70"},
      {name: "Orangensaft, 0.2L", desc: "", price: "3,50"},
      {name: "Bionade Holunder, 0,33L", desc: "", price: "3,50"},
      {name: "Bionade Orange-Ingwer, 0,33L", desc: "", price: "3,50"},
      ],
    "Alcoholic":[
      {name: "Kirin Ichiban (Fass), 0,3L/0,5L", desc: "", price: "3,80/5,20"},
      {name: "Alkoholfreies Kirin Ichiban (Flasche), 0,33L", desc: "", price: "3,80"},
      {name: "Weizenbier (Flasche), 0,5L", desc: "", price: "4,50"},
      {name: "Alkoholfreies Weizenbier (Flasche), 0,5L", desc: "", price: "4,50"},
      {name: "Rotwein, 0,2L/0,75L", desc: "", price: "6,10/24,00"},
      {name: "Rosewein, 0,2L/0,75L", desc: "", price: "7,20/21,00"},
    ],
    "Tee":[
      {name: "Gersten Tee (kalt), 0,3L", desc: "", price: "3,50"},
      {name: "Grüner Tee Sencha (heiß), eine Tasse/eine Kanne", desc: "", price: "3,50/6,00"},
      {name: "Grüner Tee Sencha (heiß), eine Tasse 100ml", desc: "", price: "4,20"},
      {name: "Grüner Tee Shot (kalt), 20ml", desc: "", price: "4,20"},
      {name: "Grüner Tee (kalt), 0,3L", desc: "", price: "5,20"},
      {name: "Grüner Tee Matcha Latte (kalt), 0,3L", desc: "", price: "6,20"},


    ],
  },
} as const;

export default function Menu() {
  const categories = Object.keys(MENU) as (keyof typeof MENU)[];
  const [active, setActive] = useState<(keyof typeof MENU)>(categories[0]);
  const [preview, setPreview] = useState<MenuItem | null>(null);

  // Subcategories for active category (e.g. "Miso Ramen", "Shio Ramen", ...)
  const subcategories = Object.keys(MENU[active]) as (keyof (typeof MENU)[typeof active])[];

  // Selected subcategory (string is easiest here)
  const [subActive, setSubActive] = useState<string>(String(subcategories[0]));

  useEffect(() => {
    // reset preview when switching category/subcategory
    setPreview(null);
  }, [active, subActive]);

  // Whenever the main category changes, reset subcategory to the first option
  useEffect(() => {
    setSubActive(String(subcategories[0]));
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  type Section =
    | MenuItem[]
    | { description?: string; items: MenuItem[] };

  const section = (MENU[active] as Record<string, Section>)[subActive];

  const items: MenuItem[] = Array.isArray(section) ? section : section?.items ?? [];
  const sectionDescription = Array.isArray(section) ? "" : section?.description ?? "";


  return (
      <div className="min-h-screen bg-background pt-20 pb-24">
      {/* Header */}
        <div className="text-center mb-10 px-6">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block"
        >
          Seasonal Offerings
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          Our Menu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="max-w-xl mx-auto text-muted-foreground leading-relaxed"
        >
          Carefully curated dishes featuring ingredients sourced from local farms and traditional Japanese markets.
        </motion.p>

        {/* Top Category Tabs */}
        <div className="flex justify-center gap-12 mt-12">
          {categories.map((cat) => {
            const isActive = active === cat;

            return (
              <button
                key={String(cat)}
                onClick={() => setActive(cat)}
                type="button"
                className={`
                  relative pb-2
                  text-sm uppercase tracking-[0.3em]
                  transition-colors
                  ${isActive ? "text-red-600" : "text-muted-foreground hover:text-white"}
                `}
              >
                {String(cat)}
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

        {/* Subcategory Tabs (only if > 1 subcategory) */}
        {subcategories.length > 1 && (
          <div className="flex justify-center gap-10 mt-8">
            {subcategories.map((sub) => {
              const subStr = String(sub);
              const isSubActive = subActive === subStr;

              return (
                <button
                  key={subStr}
                  onClick={() => setSubActive(subStr)}
                  type="button"
                  className={`
                    relative pb-2
                    text-xs uppercase tracking-[0.28em]
                    transition-colors
                    ${isSubActive ? "text-white" : "text-muted-foreground hover:text-white"}
                  `}
                >
                  {subStr}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[1px] w-full
                      transition-opacity
                      ${isSubActive ? "bg-red-600 opacity-100" : "opacity-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
        <div className="max-w-4xl mx-auto px-6 mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${String(active)}-${subActive}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <h2 className="text-3xl font-serif italic text-primary">
                {String(active)}
                {subcategories.length > 1 ? (
                  <span className="text-muted-foreground not-italic font-sans text-base ml-3">
                    / {subActive}
                  </span>
                ) : null}
              </h2>
              <div className="h-[1px] flex-1 bg-border" />
            </div>

            {sectionDescription && (
              <p className="mt-4 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed mx-auto">
                {sectionDescription}
              </p>
            )}


            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
              {/* LEFT: Menu list */}
              <div className="mt-12 space-y-8">
                {items.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => item.img && setPreview(item)}
                    onMouseEnter={() => item.img && setPreview(item)}
                    className="w-full text-left border-b border-border/60 pb-6 focus:outline-none"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-serif leading-tight">
                          {item.name}
                          {item.allergens?.length ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation(); // important: don't trigger the image preview click
                                document.getElementById("allergens")?.scrollIntoView({ behavior: "smooth" });
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

                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        €{item.price}
                      </span>
                    </div>


                    {item.desc && item.desc.trim() !== "" && (
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    )}

                    {/* subtle hint if it has a photo */}
                    {item.img && (
                      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-red-600/80">
                        View photo
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {/* RIGHT: Preview panel */}
              <div className="sticky top-28 hidden lg:block">
                <div className="border border-border/60 bg-black/20 p-3">
                  {preview?.img ? (
                    <img
                      src={preview.img}
                      alt={preview.name}
                      className="w-full h-[420px] object-cover"
                    />
                  ) : (
                    <div className="w-full h-[420px] flex items-center justify-center text-sm text-muted-foreground">
                      Hover a dish to preview
                    </div>
                  )}
                </div>

                {preview && (
                  <div className="mt-4">
                    <div className="text-sm uppercase tracking-[0.3em] text-red-600">
                      {preview.name}
                    </div>
                    {preview.desc && preview.desc.trim() !== "" && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {preview.desc}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer note */}
      <div
        id="allergens"
        className="max-w-2xl mx-auto mt-24 px-6 text-center border-t border-border pt-8 scroll-mt-28"
      >
        <p className="mb-3 text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Zusatzstoffe
        </p>

        <p className="text-xs leading-relaxed text-muted-foreground/80">
          1 mit Farbstoff · 2 enthält Koffein · 3 mit Säuerungsmittel (enthält eine Phenylalaninquelle) · 4 mit Antioxidationsmittel · 5 mit Aromen · 6 mit Geschmacksverstärker · 7 mit Konservierungsstoffen ·
          8 mit Stabilisatoren
        </p>
      </div>


    </div>
  );
}

