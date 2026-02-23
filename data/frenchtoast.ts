import frenchToastImg from "../assets/images/frenchtoast_section.jpg";
import { MenuItem } from "../types/menu";

/* ---------- CONSTANT BASE ---------- */

export const frenchToastBase = {
  name: "French Toast Base",
  ingredients: ["French toast (2)"],
};

/* ---------- MENU ITEMS ---------- */

export const frenchToast: MenuItem[] = [
  {
    id: 1300,
    category: "French Toast",
    dish_name: "Kayla",
    finish: ["Maple syrup", "Garnish berry compote"],
    price: 10,
    image: frenchToastImg,
  },
  {
    id: 1301,
    category: "French Toast",
    dish_name: "Kalpana",
    finish: [
      "Berry compote",
      "Ice cream",
      "Maple syrup",
      "Garnish berry compote",
    ],
    price: 15,
    image: frenchToastImg,
  },
  {
    id: 1302,
    category: "French Toast",
    dish_name: "Yuka",
    finish: [
      "Strawberries",
      "Maple syrup",
      "Whipped cream",
      "Garnish berry compote",
    ],
    price: 15,
    image: frenchToastImg,
  },
  {
    id: 1303,
    category: "French Toast",
    dish_name: "Samoa",
    finish: ["Bacon (2)", "Scrambled eggs", "Maple syrup"],
    price: 20,
    image: frenchToastImg,
  },
];
