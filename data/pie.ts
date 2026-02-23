import pieImg from "../assets/images/pie_section.jpg";
import { MenuItem } from "../types/menu";

/* ---------- CONSTANT BASE ---------- */

export const pieBase = {
  name: "Pie Base",
  ingredients: ["Steak & mushroom pie"],
};

/* ---------- MENU ITEMS ---------- */

export const pies: MenuItem[] = [
  {
    id: 1900,
    category: "Pie",
    dish_name: "Orange Progress",
    finish: ["Gravy"],
    price: 10,
    image: pieImg,
  },
  {
    id: 1901,
    category: "Pie",
    dish_name: "Barrett Browning",
    finish: ["Mashed potato", "Gravy"],
    price: 15,
    image: pieImg,
  },
  {
    id: 1902,
    category: "Pie",
    dish_name: "Ripper",
    finish: ["Fries", "Gravy"],
    price: 15,
    image: pieImg,
  },
];
