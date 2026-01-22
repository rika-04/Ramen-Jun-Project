import MenuLayout, { MenuData } from "./MenuLayout";

const MENU_WESTEND: MenuData = {
  Ramen: {
    "Tonkotsu Ramen": {
      items: [
        {type: "header",title:"Tonkotsu", desc:"Schweinefleischbrühe mit Nudeln aus Weizenmehl, 2 Chashu (Schweinefleischscheiben), Frühlingszwiebeln, Kikurage Pilze und eingelegtem Ingwer"},
        { name: "Tonkotsu Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "15,00" , img:"/images/Ramen_Tonkotsu.jpg"},
        { name: "Tonkotsu Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "17,10" },
        { name: "Tonkotsu Deluxe",desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "18,40" },
        { name: "Tonkotsu Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "20,80" },

        {type: "header",title:"Aka Tonkotsu", desc:"Tonkotsu Ramen mit hausgemachtem Chiliöl (scharf)"},
        { name: "Aka Ton Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "16,50" },
        { name: "Aka Ton Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "18,50" },
        { name: "Aka Ton Deluxe",desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "19,90" },
        { name: "Aka Ton Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "22,30" },

        {type: "header",title:"Kuro Tonkotsu", desc:"Tonkotsu Classic mit hausgemachtem Knoblauch-Öl"},
        { name: "Kuor Ton Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "16,50" },
        { name: "Kuro Ton Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "18,60" },
        { name: "Kuro Ton Deluxe",desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "19,90" },
        { name: "Kuro Ton Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "22,30" },

      ],
    },
    "Spezial Tonkotsu Ramen": {
      items: [
      { name: "Takana Tonkotsu (Scharf!)", price: "18,20", allergens: [1,3,6,7] },
      { name: "Miso Takana Tonkotsu (Scharf!)",desc: "Hausgemachte scharfe Soße und eingelegtes <<Takana>> Blattgemüse auf unserem Tokotsu Classic/Miso Ton Classic", price: "19,20", allergens: [1,3,6,7] },
        { name: "Yasai Tonkotsu", price: "18,80" },
        { name: "Miso Yasai Tonkotsu ",desc: "Chashu Schweinefleischscheiben und Gemüse (Karotten, Zwiebeln, Kohl, Sojasprossen) auf unserem Tokotsu Classic/Miso Ton Classic", price: "19,80" },
      ],
    },
  
  "Miso Tonkotsu Ramen": {
      items: [
        {type: "header",title:"Miso Tonkotsu",desc:"Schweinefleischbrühe mit Nudeln aus Weizenmehl, Miso (Sojabohnenpaste), 2 Chashu (Schweinefleischscheiben) und Gemüse"},
        { name: "Miso Ton Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "16,00" },
        { name: "Miso Ton Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "18,10" },
        { name: "Miso Ton Deluxe" ,desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "19,40" },
        { name: "Miso Ton Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "21,80"},

        {type: "header",title:"Miso Aka Ton"},
        { name: "Miso Aka Ton Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "16,50" },
        { name: "Miso Aka Ton Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "18,50" },
        { name: "Miso Aka Ton Deluxe",desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "19,90" },
        { name: "Miso Aka Ton Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "22,30" },

        {type: "header",title:"Miso Kuro Ton"},
        { name: "Miso Kuro Ton Classic",desc: "2 Scheiben Chashu Schweinefleisch", price: "17,50" },
        { name: "Miso Kuro Ton Chashu",desc: "Classic + 3 extra Scheiben Chashu Schweinefleisch", price: "19,60" },
        { name: "Miso Kuro Ton Deluxe",desc: "Classic + 2 extra Scheiben Chashu Schweinefleisch und Ni-Tamago (eingelegtes und gekochtes Ei)", price: "20,90" },
        { name: "Miso Kuro Ton Special",desc:"Classic + Ni-Tamago, geröstete Tomate, gerösteten Knoblauch und Avocado ", price: "22,30" },
        
      ],
    },
  
  "Shabu-Shabu Miso Ramen": {
      items: [
        { name: "Buta-Shabu Miso Ramen",desc: "Japanischer <<Shabu-Shabu-Style>> dünn geschnittenes Schweinefleisch auf einem Miso Ramen mit dicken Nudeln", price: "18,80" },
        { name: "Buta-Shabu Negi Miso Ramen",desc: "Buta-Shabu Miso Ramen garniert mit würzig scharfen Lauchzwiebeln", price: "21,80", allergens:[3] },
        { name: "Buta-Shabu Negi Miso Chashu",desc: "Buta-Shabu Miso Ramen garniert mit würzig scharfen Lauchzwiebeln und view extra Scheiben Chashu Schweinefleisch", price: "23,50", allergens:[3] },
      ],
    },
    "Veggie Ramen": {
      items: [
        { name: "Veggie Miso Ramen", price: "17,50" },
        { name: "Spicy Veggie Miso Ramen",desc: "Vegetarische Brühe mit Misopaste, dicke Weizennudeln, Frühlingszwiebeln, Zwiebeln, Tomaten, rote & grüne Paprika, Pilze, Kartoffeln, Auberginen, Zucchini, Bratpaprika, Sesam und Tofu", price: "18,00", allergens:[3] },
        { name: "Veggie White Ramen", price: "18,00"},
        { name: "Spicy Veggie White Ramen",desc: "Vegetarische Brühe mit Misopaste, dünnen Weizennudeln, Sojamilch, Lauch, gerösteter Knoblauch,geröstete Tomate, Kikurage, Pilze und Sojaschnitzel (enthält Spuren von Inger, Pilzen und Chili)", price: "19,50" },
      ],
    },
  },
  Sides: {
    "Vorspeisen":{
      description:
      "Alle unsere Gyoza Teigtaschen, sowie Nudeln werden in unserer Küche täglich frisch zubereitet",
      items:[
          { name: "Edamame", desc: "Sea salt.", price: "4,50" },
          { name: "Gyoza (3x/5x)", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Gemüse und Schweinefleisch", price: "5,20/8,50" },
          { name: "Shrimp Gyoza", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Garnelen, Gemüse und Schweinefleisch", price: "4.50" },
          { name: "Karaage (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert", price: "5,60/9,80" ,img:"/images/Side_Karaage.jpg"},
          { name: "Chicken Nanban (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei)", price: "6,80/11,00" },
          { name: "Chashu Mori", desc: "Würzige Schweinefleischscheiben (Chashu) angerichtet mit scharfen Lauchzwiebeln und Frühlingszwiebeln", price: "6,80" , img:"/images/Side_ChashuMori.jpg", allergens: [3]},
        ],
    },
        "Salate":{
          items:[
          { name: "Avocado Wasabi", desc: "Aufgeschnittene Avocado mit würzigem Wasabi-Dressing", price: "5,20" },
          { name: "Geröstete Tomaten & Knoblauch", desc: "Geröstete Tomaten und Knoblauch mit Avocado und würzigem Wasabi-Dressing", price: "7,80" },
          { name: "Gurken & Frühlingszwiebeln", desc: "Eingelegte Gurken und Frühlingszwiebeln mit Sesamöl-Dressing", price: "5,20" },
          { name: "Gurken & Sesam", desc: "Eingelegte Gurken in Scheiben mit Sesamöl-Dressing", price: "5,20" },
        ],
        },
        "Donburi (Reisschüsseln)":{items:[
          { name: "Negi Chashu Don (klein)", desc: "Chashu Schweinefleischscheiben, Frühlingszwiebeln, Sesamkörner und Sesamöl serviert mit Reis", price: "5,80" },
          { name: "Chicken Nanban Don (klein)", desc: "Saftiges Hühnerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei) serviert mit Reis", price: "7,20" },
        ],
    },
  },
  Deserts: {
    All: {
      items:[
      { name: "Eis", desc: "Sie können zwei Kugeln Eis in ihrer Lieblingskombination bestellen (Matcha, Schwarzsesam, Vanille)", price: "4,50", img: "/images/Desert_MatchaSesameIceCream.jpg" },
      { name: "Hausgemachte Dorayaki", desc: "Japanischer Pfannkuchen mit Azukibohnen", price: "4,50", img: "/images/Desert_Dorayaki.jpg" },
      { name: "Matcha Affogato", desc: "Vanilleeis mit Matcha Tee", price: "6,80" },
    ],
  },
  },

  Drinks: {
    "Non-Alcoholic": {
      items: [{ name: "Wasser", price: "3,50" }],
    },
    Alcoholic: {
      items: [{ name: "Asahi Super Dry", price: "5,50" }],
    },
    Tee: {
      items: [{ name: "Matcha", price: "4,50" }],
    },
  },
};

export default function MenuWestend() {
  return <MenuLayout locationLabel="Ramen Jun Westend" menu={MENU_WESTEND} />;
}
