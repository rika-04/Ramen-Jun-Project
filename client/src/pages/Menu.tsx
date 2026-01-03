import { useCategories, useMenuItems } from "@/hooks/use-restaurant";
import { MenuCard } from "@/components/MenuCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Menu() {
  const { data: categories, isLoading: isCatLoading } = useCategories();
  const { data: items, isLoading: isItemsLoading } = useMenuItems();

  const isLoading = isCatLoading || isItemsLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  // Fallback if data fetch fails or is empty
  if (!categories || !items) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
        <h2 className="text-2xl font-serif mb-4">Unable to load menu</h2>
        <p className="text-muted-foreground">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Menu Header */}
      <div className="text-center mb-20 px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block"
        >
          Seasonal Offerings
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-serif mb-6"
        >
          Our Menu
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto text-muted-foreground leading-relaxed"
        >
          Carefully curated dishes featuring ingredients sourced from local farms and traditional Japanese markets.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-24">
        {categories.map((category) => {
          const categoryItems = items.filter(item => item.categoryId === category.id);
          
          if (categoryItems.length === 0) return null;

          return (
            <section key={category.id} className="scroll-mt-32" id={category.slug}>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-3xl font-serif italic text-primary">{category.name}</h2>
                <div className="h-[1px] flex-1 bg-border"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-0">
                {categoryItems.map((item, index) => (
                  <MenuCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      
      <div className="max-w-xl mx-auto text-center mt-24 px-6 text-sm text-muted-foreground italic border-t border-border pt-8">
        <p>
          * A 20% gratuity will be added to parties of 6 or more. 
          Please inform your server of any allergies before ordering.
        </p>
      </div>
    </div>
  );
}
