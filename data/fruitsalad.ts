import fruitSaladImg from "../assets/images/fruitsalad_section.jpg";
import { MenuItem } from "../types/menu";

export const fruitSalads: MenuItem[] = [
  {
    id: 1700,
    category: "Fruit Salad",
    dish_name: "Toronto",
    ingredients: [
      "Fruit salad with raspberries",
      "Berry compote",
      "Greek yoghurt",
      "Roasted macadamia nuts",
    ],
    price: 12,
    image: fruitSaladImg,
  },
  {
    id: 1701,
    category: "Fruit Salad",
    dish_name: "Ivo",
    ingredients: [
      "Mash avo",
      "Grilled tomato (2)",
      "Wilted spinach",
      "Fruit salad with raspberries",
      "Toast",
    ],
    price: 17,
    image: fruitSaladImg,
  },
];
