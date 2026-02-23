import rostiImg from "../assets/images/vegetablerosti_section.jpg";
import { MenuItem } from "../types/menu";

export const vegetableRosti: MenuItem[] = [
  {
    id: 1800,
    category: "Vegetable Rosti",
    dish_name: "Benny Fit",
    ingredients: [
      "Vegetable rosti",
      "Baked beans",
      "Fried egg",
      "Grilled tomato (1)",
      "Toast",
    ],
    price: 15,
    image: rostiImg,
  },
  {
    id: 1801,
    category: "Vegetable Rosti",
    dish_name: "Apollo 11",
    ingredients: [
      "Toasted Turkish bread",
      "Relish (eggplant & tomato)",
      "Wilted spinach",
      "Vegetable rosti",
      "Mash avo",
      "Fresh chilli",
    ],
    price: 17,
    image: rostiImg,
  },
  {
    id: 1802,
    category: "Vegetable Rosti",
    dish_name: "Disco Ball",
    ingredients: [
      "Vegetable rosti",
      "Wilted spinach",
      "Haloumi 60g",
      "Poached egg",
      "Hollandaise sauce",
      "Toast",
    ],
    price: 19,
    image: rostiImg,
  },
];
