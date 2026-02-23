import beefMinceImg from "../assets/images/beefmince_section.jpg";
import { MenuItem } from "../types/menu";

export const beefMince: MenuItem[] = [
  {
    id: 1000,
    category: "Beef Mince",
    dish_name: "Biggleswade",
    ingredients: [
      "Wrap",
      "Beef mince",
      "Hash brown (1)",
      "Melted pizza cheese",
    ],
    price: 10,
    image: beefMinceImg,
  },
  {
    id: 1001,
    category: "Beef Mince",
    dish_name: "Police",
    ingredients: ["Mince beef 260g", "Toast"],
    price: 12,
    image: beefMinceImg,
  },
  {
    id: 1002,
    category: "Beef Mince",
    dish_name: "Asmin",
    ingredients: ["Bubble & Squeak", "Mince beef 260g", "Toast"],
    price: 15,
    image: beefMinceImg,
  },
  {
    id: 1003,
    category: "Beef Mince",
    dish_name: "Tahiti",
    ingredients: ["Mashed potato", "Mince beef", "Poached egg", "Toast"],
    price: 15,
    image: beefMinceImg,
  },
  {
    id: 1004,
    category: "Beef Mince",
    dish_name: "Paddy O",
    ingredients: [
      "Potato rosti",
      "Mince beef",
      "Poached egg",
      "Hollandaise sauce",
      "Toast",
    ],
    price: 15,
    image: beefMinceImg,
  },
];
