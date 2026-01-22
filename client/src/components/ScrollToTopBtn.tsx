import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";


export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-primary text-primary-foreground
        flex items-center justify-center
        shadow-lg
        hover:bg-primary/90
        transition-all
      "
    >
      <ChevronUp size={22} />
    </button>
  );
}
