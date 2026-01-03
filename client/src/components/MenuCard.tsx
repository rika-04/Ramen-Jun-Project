import type { MenuItem } from "@shared/schema";
import { motion } from "framer-motion";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(item.price / 100);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        relative p-6 group transition-colors duration-300 border-b border-dashed border-border
        hover:bg-secondary/20
        ${!item.available ? "opacity-50 grayscale" : ""}
      `}
    >
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <h4 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h4>
        <span className="font-mono text-sm font-medium text-muted-foreground whitespace-nowrap">
          {formattedPrice}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[90%]">
        {item.description}
      </p>

      {!item.available && (
        <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-destructive border border-destructive px-2 py-0.5">
          Sold Out
        </span>
      )}
    </motion.div>
  );
}
