import crepesImg from "../assets/images/crepes_section.jpg";
import { MenuItem } from "../types/menu";

export const crepes: MenuItem[] = [
  {
    id: 1200,
    category: "Crepes",
    dish_name: "Duffel Coat",
    ingredients: [
      "Coco63 crepes (3)",
      "Strawberries",
      "Berry compote",
      "Whipped cream",
      "Warm caramel sauce",
    ],
    price: 17,
    image: crepesImg,
  },
  {
    id: 1201,
    category: "Crepes",
    dish_name: "House of Commons",
    ingredients: [
      "Coco63 crepes (3)",
      "Scrambled eggs",
      "Crispy diced bacon",
      "Spinach",
      "Melted cheddar cheese (1)",
    ],
    price: 22,
    image: crepesImg,
  },
  {
    id: 1202,
    category: "Crepes",
    dish_name: "Red Hat",
    ingredients: [
      "Coco63 crepes (3)",
      "Pork belly (3)",
      "BBQ sauce",
      "Poached eggs",
      "Hollandaise sauce",
    ],
    price: 22,
    image: crepesImg,
  },
];
