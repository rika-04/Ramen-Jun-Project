interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  className?: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/images/people/FoodServing.jpg",
    alt: "Restaurant Interior",
    title: "The Atmosphere",
    category: "Ambience",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/vibe/vibe_food3.jpg",
    alt: "Signature Ramen",
    title: "Crafted Noodles",
    category: "Signature",
  },
  {
    id: 3,
    src: "/images/vibe/vibe_food2.jpg",
    alt: "Chef at Work",
    title: "The Art of Prep",
    category: "Process",
    className: "md:row-span-2",
  },
  {
    id: 4,
    src: "/images/drinks/Drink_matcha.jpg",
    alt: "Fresh Ingredients",
    title: "Shun Ingredients",
    category: "Fresh",
  },
  {
    id: 5,
    src: "/images/vibe/vibe_food1.png",
    alt: "Table Detail",
    title: "Minimalism",
    category: "Detail",
    className: "md:col-span-2",
  },
  {
    id: 6,
    src: "/images/ramen/Ramen_CloseUp.jpg",
    alt: "Ramen Jun Interior",
    title: "Modern Tradition",
    category: "Design",
    // No className needed, it will fill the last 1x1 slot
  },
  {
    id: 7,
    src: "/images/sides/Deserts_Dorayaki2.jpg",
    alt: "Ramen Jun Interior",
    title: "Modern Tradition",
    category: "Design",
    // No className needed, it will fill the last 1x1 slot
  },
];

export default function Gallery() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Stays visible for context */}
        <div className="mb-16 text-center">
          <span className="text-gray-500 uppercase tracking-[0.3em] text-xs block mb-4">
            Visual Journey
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-serif mb-6">
            Captured Moments
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-zinc-900 ${item.className ?? ""}`}
            >
              {/* Image - Subtle grayscale or dim by default adds to the minimalist feel */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-all duration-700 ease-out
                           grayscale-[20%] group-hover:grayscale-0
                           group-hover:scale-105 opacity-80 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Minimalist Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6
                           bg-gradient-to-t from-black/90 via-black/40 to-transparent
                           /* Default: hidden */
                           opacity-0 
                           /* Hover: visible */
                           group-hover:opacity-100 
                           transition-all duration-500 ease-in-out"
              >
                {/* Optional: Add a subtle slide-up animation for the text */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-xs tracking-widest uppercase mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif italic text-xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}