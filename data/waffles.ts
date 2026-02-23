import wafflesImg from "../assets/images/waffles_section.jpg";
import { MenuItem } from "../types/menu";

/* ---------- CONSTANT BASE ---------- */

export const waffleBase = {
  name: "Waffle Base",
  ingredients: ["Waffle"],
};

/* ---------- MENU ITEMS ---------- */

export const waffles: MenuItem[] = [
  {
    id: 1500,
    category: "Waffles",
    dish_name: "Harriet",
    finish: ["Ice cream", "Maple syrup", "Garnish berry compote"],
    price: 10,
    image: wafflesImg,
  },
  {
    id: 1501,
    category: "Waffles",
    dish_name: "Boston",
    finish: ["Raspberries", "Mango compote", "Ice cream"],
    price: 12,
    image: wafflesImg,
  },
  {
    id: 1502,
    category: "Waffles",
    dish_name: "Michael Schumacher",
    finish: ["Waffles (2)", "Whipped cream", "Strawberries", "Maple syrup"],
    price: 18,
    image: wafflesImg,
  },
  {
    id: 1503,
    category: "Waffles",
    dish_name: "Alisha Doubled Back",
    finish: [
      "Waffles (2)",
      "Ice cream",
      "Berry compote",
      "Strawberries",
      "Roasted macadamia nuts",
      "Warm caramel sauce",
    ],
    price: 20,
    image: wafflesImg,
  },
  {
    id: 1504,
    category: "Waffles",
    dish_name: "Stirling Moss",
    finish: ["Waffles (2)", "Bacon (2)", "Scrambled eggs", "Maple syrup"],
    price: 20,
    image: wafflesImg,
  },
];
