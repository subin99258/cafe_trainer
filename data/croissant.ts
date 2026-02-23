import croissantImg from "../assets/images/croissant_section.jpg";
import { MenuItem } from "../types/menu";

/* ---------- CONSTANT BASE ---------- */

export const croissantBase = {
  name: "Croissant Base",
  ingredients: ["Toasted croissant"],
};

/* ---------- MENU ITEMS ---------- */

export const croissants: MenuItem[] = [
  {
    id: 1600,
    category: "Croissant",
    dish_name: "CR7",
    finish: ["Toasted croissant (1)"],
    price: 6,
    image: croissantImg,
  },
  {
    id: 1601,
    category: "Croissant",
    dish_name: "Napoleon",
    finish: ["Ham (2)", "Melted cheddar cheese (1)", "Tomato"],
    price: 10,
    image: croissantImg,
  },
  {
    id: 1602,
    category: "Croissant",
    dish_name: "Tricolour",
    finish: ["Bacon (1)", "Melted cheddar cheese (1)", "Hash brown (1)"],
    price: 10,
    image: croissantImg,
  },
];
