import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

export default function Location() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block">Visit Us</span>
            <h1 className="text-5xl font-serif mb-6">Location & Hours</h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Located in the heart of the district, offering a serene escape from the city bustle. 
              Valet parking available in the evenings.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">Address</h3>
                <p className="text-muted-foreground">
                  123 Sakura Way<br/>
                  Tokyo District, NY 10012
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">Opening Hours</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground">
                  <span>Mon - Thu</span>
                  <span>11:00 am – 10:00 pm</span>
                  <span>Fri - Sat</span>
                  <span>11:00 am – 11:00 pm</span>
                  <span>Sunday</span>
                  <span>12:00 pm – 9:30 pm</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">Contact</h3>
                <p className="text-muted-foreground mb-1">+1 (555) 123-4567</p>
                <p className="text-muted-foreground">hello@zendining.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[600px] bg-secondary/20 relative p-2 border border-border"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309598967!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1629817937427!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Restaurant Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
