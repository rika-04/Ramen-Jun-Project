import MenuLayout, { MenuData } from "./MenuLayout";

const MENU_RED: MenuData = {
  Ramen: {
    "Miso Ramen": {
      description:
        "Für unsere hausgemachte Miso Ramen benutzen wir Meister Jun's spezielle Misopaste extra aus Japan importiert. Alle Miso Ramen enthalten Schweinebrühe, Weizennudeln, 2 Chashu, Frühlingszwiebeln, Sojasprossen, Kikurage Pilze und Sesamkörner.",
      items: [
        { name: "Miso Ramen", desc: "", price: "16,00", allergens: [4,6] },
        { name: "Spicy Miso Ramen", desc: "Spicy miso broth, ground pork, bean sprouts.", price: "18,00", allergens: [3,4,6], img:"/images/Ramen_SpMiso.jpg" },
        { name: "Negi Miso Ramen", desc: "", price: "19,00" , allergens: [3,4,6]},
        { name: "Spicy Negi Miso Ramen", desc: "Miso Ramen mit scharfen Lauchzwiebeln", price: "21,00" , allergens: [3,4,6]},
        { name: "Negi Miso Chashu Ramen", desc: "", price: "22,30", allergens: [3,4,6] },
        { name: "Spicy Negi Miso Chashu Ramen", desc: "Miso Ramen mit scharfen Lauchzwiebeln und vier extra Scheiben Chashu Schweinefleisch", price: "24,30" , allergens: [3,4,6]},
        { name: "Miso Cheese Ramen", desc: "", price: "20,30", allergens: [4,6], img:"/images/Ramen_MisoCheese.jpg" },
        { name: "Spicy Miso Cheese Ramen", desc: "Miso Ramen mit Parmesankäse", price: "22,30" , allergens: [3,4,6]},
        { name: "Miso Chashu Ramen", desc: "", price: "18,80" , allergens: [4,6]},
        { name: "Spicy Miso Chashu Ramen", desc: "Miso Ramen mit vier extra Scheiben Chashu Schweinefleisch", price: "20,80" , allergens: [3,4,6]},
        { name: "Miso Deluxe Ramen", desc: "", price: "20,60", img: "/images/Ramen_MisoDeluxeRamen.jpg" , allergens: [4,6]},
        { name: "Spicy Miso Deluxe Ramen", desc: "Miso Ramen mit Miesmuscheln, Jakobsmuscheln, Garnelen, Mais und Butter anstatt Chashu Schweinefleisch und Mikurage Pilze", price: "22,60", allergens: [3,4,6] },
        ],
    },
    "Shio Ramen": {
      items:[
        { name: "Shio Ramen", desc: "Gesalzene Schweinebrühe mit Weizennudeln, zwei Scheiben Chashu Schweinefleisch, Frühlingszwiebeln, Kikurage Pilzen, Sojasprossen, Pakchoi, Mais und Butter", price: "18,00" , allergens: [6]},
        ] 
        },
      "Special Miso Ramen": {
        items:[
        { name: "Karaage Miso Ramen", desc: "", price: "20,80", img:"/images/Ramen_KaraageMiso.jpg" },
        { name: "Spicy Karaage Miso Ramen", desc: "Miso Ramen mit drei Stück Karaage anstatt Chashu Schweinefleisch", price: "22,80", allergens: [3] },
        { name: "Yasai Miso Ramen", desc: "", price: "19,60", img: "/images/Ramen_YasaiMisoRamen.jpg" },
        { name: "Spicy Yasai Miso Ramen", desc: "Miso Ramen mit Gemüse (Karotten, Zwiebeln, Kohl, Sojasprossen, Zucchini) und Chashu Schweinefleisch im Wok zubereitet", price: "21,60", allergens: [3] },
        { name: "Seafood Miso Ramen", desc: "", price: "21,00" , img:"/images/Ramen_SeafoodMiso.jpg"},
        { name: "Spicy Seafood Miso Ramen", desc: "Miso Ramen mit Miesmuscheln, Jakobsmuscheln, Garnelen, Mais und Butter anstatt Chashu Schweinefleisch und Kikurage Pilze", price: "23,00" , allergens: [3]},
        ],
    },
    
    "Veggie Ramen": {
      items:[
      { name: "Veggie Miso Ramen", desc: "", price: "17,50", img:"/images/Ramen_VeggieMisoNoSp.jpg" },
      { name: "Spicy Veggie Miso Ramen", desc: "Vegetarische Brühe mit Misopaste, Weizennudeln, Frühlingszwiebeln, Tomaten, Paprika, Zwiebeln, Champignons, Kartoffeln, Auberginen, Zucchini, Bratpaprika, Sesam und Tofu", price: "19,50", img:"/images/Ramen_VeggieMiso.jpg" },
      { name: "Veggie White Ramen", desc: "", price: "18,00" },
      { name: "Spicy Veggie White Ramen", desc: "Vegetarische Brühe mit Misopaste, Weizennudeln, Sojamilch, Lauch, gerösteten Knoblauch, gerösteter Tomate, Kikurage Pilzen, Avocado und Sojaschnitzel (enthält Spuren von Ingewer, Pilzen und Chili)", price: "19,50", allergens: [3], img: "/images/Ramen_VeggieWhiteRamen.jpg" },
      ]
     },
    },

  Sides: {
    "Vorspeisen":{
      items:[
          { name: "Edamame", desc: "Sea salt.", price: "4,50",img:"/images/Side_Edamame.png" },
          { name: "Gyoza (3x/5x)", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Gemüse und Schweinefleisch", price: "5,20/8,50" , img:"/images/Side_Gyoza1.png"},
          { name: "Shrimp Gyoza", desc: "Hausgemachte gebratene Teigtaschen, gefüllt mit Garnelen, Gemüse und Schweinefleisch", price: "4.50" },
          { name: "Karaage (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert", price: "5,60/9,80" ,img:"/images/Side_Karaage.jpg"},
          { name: "Chicken Nanban (3x/6x)", desc: "Saftiges Hünerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei)", price: "6,80/11,00" },
          { name: "Chashu Mori", desc: "Würzige Schweinefleischscheiben (Chashu) angerichtet mit scharfen Lauchzwiebeln und Frühlingszwiebeln", price: "6,80" , img:"/images/Side_ChashuMori1.jpg", allergens: [3]},
        ],
    },
        "Salate":{
          items:[
          { name: "Avocado Wasabi", desc: "Aufgeschnittene Avocado mit würzigem Wasabi-Dressing", price: "5,20" },
          { name: "Geröstete Tomaten & Knoblauch", desc: "Geröstete Tomaten und Knoblauch mit Avocado und würzigem Wasabi-Dressing", price: "7,80" },
          { name: "Gurken & Frühlingszwiebeln", desc: "Eingelegte Gurken und Frühlingszwiebeln mit Sesamöl-Dressing", price: "5,20" },
          { name: "Gurken & Sesam", desc: "Eingelegte Gurken in Scheiben mit Sesamöl-Dressing", price: "5,20", img:"/images/Side_Gurken&Sesam.png" },
        ],
        },
        "Donburi (Reisschüsseln)":{items:[
          { name: "Negi Chashu Don (klein)", desc: "Chashu Schweinefleischscheiben, Frühlingszwiebeln, Sesamkörner und Sesamöl serviert mit Reis", price: "5,80",img:"/images/Don_NegiChashu.jpg" },
          { name: "Chicken Nanban Don (klein)", desc: "Saftiges Hühnerschenkelfleisch in einer würzigen Marinade knusprig frittiert mit hausgemachter süß-sauer Soße und Tartar Soße (aus gekochtem Ei) serviert mit Reis", price: "7,20", img:"/images/Don_ChickenNanban.jpg" },
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
      "Non-Alcoholic":{
        items:[
            {name: "Wasser (mit Kohlensäure), 0,25L/0,75L", desc: "", price: "2,50/6,00"},
            {name: "Wasser (ohne Kohlensäure), 0,25L/0,75L", desc: "", price: "2,50/6,00"},
            {name: "Cola (fritz-kola), 0,33L", desc: "", price: "3,20"},
            {name: "Cola zuckerfrei (fritz-kola) 0,33L", desc: "", price: "3,20"},
            {name: "Bio Apfelschorle (fritz-kola) 0,33L", desc: "", price: "2,70"},
            {name: "Apfelsaft, 0,2L", desc: "", price: "2,70"},
            {name: "Orangensaft, 0.2L", desc: "", price: "3,50"},
            {name: "Bionade Holunder, 0,33L", desc: "", price: "3,50"},
            {name: "Bionade Orange-Ingwer, 0,33L", desc: "", price: "3,50"},
            ],
      },
        "Alcoholic":{items:[
          {name: "Kirin Ichiban (Fass), 0,3L/0,5L", desc: "", price: "3,80/5,20"},
          {name: "Alkoholfreies Kirin Ichiban (Flasche), 0,33L", desc: "", price: "3,80"},
          {name: "Weizenbier (Flasche), 0,5L", desc: "", price: "4,50"},
          {name: "Alkoholfreies Weizenbier (Flasche), 0,5L", desc: "", price: "4,50"},
          {name: "Rotwein, 0,2L/0,75L", desc: "", price: "6,10/24,00"},
          {name: "Rosewein, 0,2L/0,75L", desc: "", price: "7,20/21,00"}, 
        ],
      },
        
      "Tee":{
        items:[
        {name: "Gersten Tee (kalt), 0,3L", desc: "", price: "3,50"},
        {name: "Grüner Tee Sencha (heiß), eine Tasse/eine Kanne", desc: "", price: "3,50/6,00"},
        {name: "Grüner Tee Sencha (heiß), eine Tasse 100ml", desc: "", price: "4,20"},
        {name: "Grüner Tee Shot (kalt), 20ml", desc: "", price: "4,20"},
        {name: "Grüner Tee (kalt), 0,3L", desc: "", price: "5,20"},
        {name: "Grüner Tee Matcha Latte (kalt), 0,3L", desc: "", price: "6,20"},
            ],
          },
      },
        
};

export default function MenuRed() {
  return <MenuLayout locationLabel="Ramen Jun Red" menu={MENU_RED} />;
}
