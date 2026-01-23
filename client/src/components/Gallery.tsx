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
    src: "/images/ingredients/NoodleDough.jpg",
    alt: "Signature Ramen",
    title: "Crafted Noodles",
    category: "Signature",
  },
  {
    id: 3,
    src: "/images/people/NegiCutting.jpg",
    alt: "Chef at Work",
    title: "The Art of Prep",
    category: "Process",
    className: "md:row-span-2",
  },
  {
    id: 4,
    src: "/images/ingredients/Chashu.jpg",
    alt: "Fresh Ingredients",
    title: "Shun Ingredients",
    category: "Fresh",
  },
  {
    id: 5,
    src: "/gallery/detail.jpg",
    alt: "Table Detail",
    title: "Minimalism",
    category: "Detail",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-gray-500 uppercase tracking-[0.3em] text-xs block mb-4">
            Visual Journey
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-serif italic mb-6">
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
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out
                           group-hover:scale-105 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Overlay (always visible on mobile, stronger on hover) */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6
                           bg-gradient-to-t from-black/80 via-black/20 to-transparent
                           opacity-100 md:opacity-70 md:group-hover:opacity-100
                           transition-opacity duration-500"
              >
                <span className="text-primary text-xs tracking-widest uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-serif italic text-xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
