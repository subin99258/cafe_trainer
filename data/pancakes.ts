import pancakesImg from "../assets/images/pancakes_section.jpg";
import { MenuItem } from "../types/menu";

/* ---------- CONSTANT BASE ---------- */

export const pancakeBase = {
  name: "Pancake Base",
  ingredients: ["Pancakes (4)"],
};

/* ---------- MENU ITEMS ---------- */

export const pancakes: MenuItem[] = [
  {
    id: 1400,
    category: "Pancakes",
    dish_name: "Megan",
    finish: ["Maple syrup", "Garnish berry compote"],
    price: 10,
    image: pancakesImg,
  },
  {
    id: 1401,
    category: "Pancakes",
    dish_name: "Chiefs",
    finish: [
      "Berry compote",
      "Maple syrup",
      "Whipped cream",
      "Raspberries",
      "Granola63",
    ],
    price: 14,
    image: pancakesImg,
  },
  {
    id: 1402,
    category: "Pancakes",
    dish_name: "Crusaders",
    finish: [
      "Berry compote",
      "Maple syrup",
      "Greek yoghurt",
      "Raspberries",
      "Granola63",
    ],
    price: 14,
    image: pancakesImg,
  },
  {
    id: 1403,
    category: "Pancakes",
    dish_name: "Sherily",
    finish: ["Raspberries", "Mango compote", "Ice cream"],
    price: 14,
    image: pancakesImg,
  },
  {
    id: 1404,
    category: "Pancakes",
    dish_name: "Kee",
    finish: [
      "Berry compote",
      "Ice cream",
      "Maple syrup",
      "Garnish berry compote",
    ],
    price: 15,
    image: pancakesImg,
  },
  {
    id: 1405,
    category: "Pancakes",
    dish_name: "Tower Bridge",
    finish: [
      "Ice cream",
      "Berry compote",
      "Strawberries",
      "Roasted macadamia nuts",
      "Warm caramel sauce",
    ],
    price: 15,
    image: pancakesImg,
  },
  {
    id: 1406,
    category: "Pancakes",
    dish_name: "Vancouver",
    finish: [
      "Bacon (1)",
      "Greek yoghurt",
      "Berry compote",
      "Roasted macadamia nuts",
      "Maple syrup",
    ],
    price: 15,
    image: pancakesImg,
  },
  {
    id: 1407,
    category: "Pancakes",
    dish_name: "Mountie",
    finish: ["Bacon (2)", "Scrambled eggs", "Maple syrup"],
    price: 20,
    image: pancakesImg,
  },
];
