import { title } from "process";

export const dict = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      location: "Location",
      ourStory: "Our Story",
      reserve: "Reserve Table",
    },
    hero: {
      taste: "  THE ART OF RAMEN",
      subtitle: "Tokyo-inspired ramen crafted in Frankfurt. Traditional methods, exceptional ingredients, unforgettable flavor.",
    },
    reserve: {
      reserve: "Reserve",
      menu: "Menu",
    },
    story: {
      title: "Our Story",
      text1: "Our story began 30 years ago in a small 7-seat restaurant in the rural town of Tsubame Sanjo, Japan. Founded by Junichi Matsumoto, it was built on a simple vision: to satisfy as many people as possible with the perfect bowl of homemade ramen.",
      text2: "Driven by Jun-san's tireless dedication, Ramen Jun has grown from its humble roots to locations across Japan and, since 2015, Germany. Today, we continue to serve every bowl with the same love and passion that started it all."
    },
    signature_dish: {
      subtitle: "Our Specialties",
      title: "Signature Dishes",
    },
    footer: {
      text: "Experience the harmony of traditional Japanese flavors meeting modern culinary artistry.",
      nav: "navigation",
      visit_us: "Visit Us",
      social: "Social",
    },
    menulocation: {
      title: "Choose a Location",
      subtitle: "Each location has a slightly different menu",
    },
    location: {
      title: "Location & Hours",
      subtitle: "Located in the heart of the district, offering a serence escape from the city bustle.",
      opening: "Opening Hours",
      address: "Address",
      contact: "contact",
      visit_us: "Visit Us",
    },
  },


  de: {
    nav: {
      home: "Start",
      menu: "Menü",
      location: "Standorte",
      ourStory: "Über Uns",
      reserve: "Tisch reservieren",
    },
    hero: {
      taste: "DIE KUNST DES RAMEN",
      subtitle: "Tokio-inspirierte Ramen, kreiert in Frankfurt. Traditionelle Methoden, außergewöhnliche Zutaten, unvergesslicher Geschmack.",
    },
    reserve: {
      reserve: "Reservieren",
      menu: "Menü",
    },
    story: {
      title: "Unsere Geschichte",
      text1: "Unsere Geschichte begann vor 30 Jahren in einem kleinen Lokal in der ländlichen Stadt Tsubame Sanjo, welche mittig in der Präfektur Niigata verweilt. Dieses wurde von Junichi Matsumoto gegründet und besaß anfangs nur 7 Sitzmöglichkeiten. Trotzdessen hatte Jun-san die Vision mit seinen hausgemachten Ramen möglichst viele Leute zufriedenzustellen.",
      text2:"Dank Jun-san's unermüdlicher Hingabe und steigender Nachfrage konnte 'Ramen Jun' weitere Lokale in ganz Japan und seit 2015 auch in Deutschland eröffnen. Seitdem freuen wir uns darauf, Ihnen täglich in unseren Restaurants frische, hausgemachte Ramen, sowie weitere japanische Spezialitäten servieren zu können. Wif hoffen, dass wir Sie mit der Liebe und Leidenschaft, welche unserer Gerichte prät, glücklich machen können. "
    },
    signature_dish: {
      subtitle: "Unsere Spezialitäten",
      title: "Köstlichkeiten des Hauses",
    },
    footer: {
      text: "Erleben Sie die Harmonie traditioneller japanischer Aromen, vereint mit moderner Kochkunst.",
      nav: "Navigation",
      visit_us: "Besuchen Sie uns",
      social: "Soziale Medien",
    },
    menulocation: {
      title: "Wählen Sie einen Standort",
      subtitle: "Jeder unserer Standorte bietet eine eigne kulinarische Auswahl",
    },
    location: {
      title: "Standort & Öffnungszeiten",
      subtitle: "Mitten im Herzen des Viertels gelegen – ein stiller Rückzugsort vom Großstadttreiben.",
      opening: "Öffnungszeiten",
      address: "Adresse",
      contact: "Kontakt",
      visit_us: "Besuchen Sie uns",
    },
  },
} as const;

export type Lang = keyof typeof dict;

export function t(lang: Lang) {
  return dict[lang];
}
