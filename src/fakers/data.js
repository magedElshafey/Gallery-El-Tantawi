// slider
import kitchen from "../assets/kitchen.jpg";
import furn from "../assets/furniture.gif";
import maforsh from "../assets/maforshat.jpg";
import magic from "../assets/magic.jpg";
// offers
import less1000 from "../assets/less1000.jpg";
import free from "../assets/freeT.jpg";
import dailyOffers from "../assets/Daily-Deals-AR_4.jpg";
// kitchen
import fire from "../assets/fire.png";
import boiler from "../assets/boiler.png";
import grill from "../assets/grill.png";
import toster from "../assets/toester.png";
// all products
import pro1 from "../assets/products/pro-01.jpg";
import pro2 from "../assets/products/pro-02.jpeg";
import pro3 from "../assets/products/pro-03.jpg";
import pro4 from "../assets/products/pro-04.jpg";
import pro5 from "../assets/products/pro-05.jpg";
import pro6 from "../assets/products/pro-06.jpg";
import pro7 from "../assets/products/pro-07.jpg";
import pro8 from "../assets/products/pro-08.jpg";
import pro9 from "../assets/products/pro-09.jpg";
import pro10 from "../assets/products/pro-10.jpg";
import pro11 from "../assets/products/pro-11.jpg";
export const offers = [
  {
    path: "/offers/kitchen",
    img: kitchen,
  },
  {
    path: "/offers/magic",
    img: magic,
  },
  {
    path: "/offers/mafrosh",
    img: maforsh,
  },
  {
    path: "/offers/furn",
    img: furn,
  },
];
export const offerImg = [
  {
    title: "أقل من 1000 ",
    img: less1000,
    path: "/offers/less",
  },
  {
    title: "العروض اليومية",
    img: dailyOffers,
    path: "/offers/daily",
  },
  {
    title: "شحن مجاني",
    img: free,
    path: "/offers/free",
  },
];
export const kitchenOffers = [
  {
    name: "قلايات",
    img: fire,
    id: 1,
  },
  {
    name: "شوايات كهربائية",
    img: grill,
    id: 2,
  },
  {
    name: "توستر",
    img: toster,
    id: 3,
  },
  {
    name: "غلايات",
    img: boiler,
    id: 4,
  },
];

export const bestSallers = [
  {
    id: 1,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro1,
    colors: ["أبيض", "ذهبي"],
    originalPrice: 4000,
    offer: 320,
    limited: true,
    freeShipping: true,
  },
  {
    id: 2,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro2,
    colors: ["ذهبي"],
    originalPrice: 20000,
    offer: 820,
    limited: true,
    freeShipping: false,
  },
  {
    id: 3,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro3,
    colors: ["روز"],
    originalPrice: 20000,
    offer: 820,
    limited: false,
    freeShipping: true,
  },
  {
    id: 4,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro4,
    colors: ["روز"],
    originalPrice: 5000,
    offer: 0,
    limited: false,
    freeShipping: false,
  },
  {
    id: 5,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro5,
    colors: ["روز", "أسود", "أبيض", "بني"],
    originalPrice: 5000,
    offer: 0,
    limited: true,
    freeShipping: true,
  },
  {
    id: 6,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro6,
    colors: ["أبيض", "بني"],
    originalPrice: 15000,
    offer: 4000,
    limited: true,
    freeShipping: false,
  },
  {
    id: 7,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro7,
    colors: ["أبيض", "بني"],
    originalPrice: 15000,
    offer: 200,
    limited: false,
    freeShipping: true,
  },
  {
    id: 8,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro8,
    colors: [],
    originalPrice: 15000,
    offer: 0,
    limited: false,
    freeShipping: false,
  },
  {
    id: 9,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro9,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: true,
    freeShipping: true,
  },
  {
    id: 10,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro10,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: true,
    freeShipping: true,
  },
  {
    id: 11,
    title: "طقم عشاء بورسلين تشيب لوتس دريم . 62 قطعة ",
    img: pro11,
    colors: ["أزرق"],
    originalPrice: 15000,
    offer: 200,
    limited: false,
    freeShipping: true,
  },
];
