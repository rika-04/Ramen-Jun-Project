      import { motion } from "framer-motion";
      import { useState, Fragment } from "react";
      import { Clock, MapPin, Phone } from "lucide-react";
      import { useLang } from "@/hooks/useLang";
      import { t } from "@/i18n"

      const locations = [
        {
          name: "Ramen Jun Red",
          addressLines: ["Fahrgasse 89", "60311 Frankfurt am Main"],
          phone: "+49 6990436699",
          hours: [
            { days: "Mon - Fri", time: "12:00 – 21:00" },
            { days: "Sa - So", time: "12:00 – 21:00" },
          ],
          mapEmbedUrl:
            "https://www.google.com/maps?q=Fahrgasse%2089%2060311%20Frankfurt%20am%20Main&output=embed",
        },
        {
          name: "Ramen Jun Westend",
          addressLines: ["Wilhelm-Hauff-Straße 10", "60325 Frankfurt am Main"],
          phone: "+49 6926918418",
          hours: [
            { days: "Mon - Fri", time: "11:30 – 21:00" },
            { days: "Sa - So", time: "11:30 – 21:00" },
          ],
          mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.829812839927!2d8.6536111!3d50.1132183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd09574c5932e3%3A0x91fdec966b3a0586!2sRamen%20Jun%20Westend!5e0!3m2!1sen!2sde!4v1704352441234!5m2!1sen!2sde",
        },
      ];

      export default function Location() {
        const { lang } = useLang();
        const withLang = (path: string) => `/${lang}${path}`;
        const copy = t(lang);
        const [selected, setSelected] = useState(0);
        const loc = locations[selected];

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
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block">
                    {copy.location.visit_us}
                  </span>
                  <h1 className="text-5xl font-serif mb-6">{copy.location.title}</h1>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    {copy.location.subtitle}
                  </p>
                </div>

                {/* Location selector */}
                <div className="flex flex-wrap gap-2">
                  {locations.map((l, i) => (
                    <button
                      key={l.name}
                      onClick={() => setSelected(i)}
                      className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border
                        ${i === selected ? "bg-primary text-primary-foreground" : "bg-transparent text-foreground"}
                      `}
                      type="button"
                    >
                      {l.name}
                    </button>
                  ))}
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">{copy.location.address}</h3>
                    <p className="text-muted-foreground">
                      {loc.addressLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">{copy.location.open}</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-muted-foreground">
                      {loc.hours.map((h) => (
                        <Fragment key={h.days}>
                          <span>{h.days}</span>
                          <span>{h.time}</span>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase tracking-wider mb-2 text-sm">{copy.location.contact}</h3>
                    <p className="text-muted-foreground mb-1">{loc.phone}</p>
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
                  src={loc.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                  loading="lazy"
                  title={loc.name}
                />
              </motion.div>
            </div>
          </div>
        );
      }
