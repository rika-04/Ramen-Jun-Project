import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="space-y-6">
          <Link href="/">
            <h3 className="text-3xl font-serif italic cursor-pointer">Zen</h3>
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Experience the harmony of traditional Japanese flavors meeting modern culinary artistry.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/50">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
            <li><Link href="/menu" className="hover:text-white/70 transition-colors">Menu</Link></li>
            <li><Link href="/location" className="hover:text-white/70 transition-colors">Location</Link></li>
            <li><Link href="/contact" className="hover:text-white/70 transition-colors">Reservations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/50">Visit Us</h4>
          <address className="not-italic text-sm text-primary-foreground/70 space-y-2">
            <p>123 Sakura Way</p>
            <p>Tokyo District, NY 10012</p>
            <p className="pt-2">+1 (555) 123-4567</p>
            <p>hello@zendining.com</p>
          </address>
        </div>

        <div>
          <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-primary-foreground/50">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <p>© 2024 Zen Dining. All rights reserved.</p>
        <p>Designed with simplicity in mind.</p>
      </div>
    </footer>
  );
}
