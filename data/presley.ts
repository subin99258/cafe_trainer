import presleySectionImg from "../assets/images/presley_section.jpg";
import { MenuItem } from "../types/menu";

export const presleyBase = {
  name: "Presley Stack Base",
  description:
    "Triple stack toasted Wrexham Dragon 'Thin' Crumpets with poached egg and hollandaise sauce",
  ingredients: [
    "Triple stack toasted Wrexham Dragon 'Thin' Crumpets",
    "Poached egg",
    "Hollandaise sauce",
  ],
};

export const presley: MenuItem[] = [
  {
    id: 500,
    category: "Presley Stacks",
    dish_name: "All Shook Up",
    finish: ["Hash brown (1)", "Chicken nuggets (5)"],
    price: 16,
    image: presleySectionImg,
  },
  {
    id: 501,
    category: "Presley Stacks",
    dish_name: "Blue Suede Shoes",
    finish: ["Hash brown (1)", "Alex the hot (Spicy sausage63) 100g"],
    price: 16,
    image: presleySectionImg,
  },
  {
    id: 502,
    category: "Presley Stacks",
    dish_name: "Heartbreak Hotel",
    finish: ["Mark Twain63 fried chicken", "Fresh avocado"],
    price: 16,
    image: presleySectionImg,
  },
  {
    id: 503,
    category: "Presley Stacks",
    dish_name: "Hound Dog",
    finish: ["Hash brown (1)", "Bacon (1)"],
    price: 16,
    image: presleySectionImg,
  },
  {
    id: 504,
    category: "Presley Stacks",
    dish_name: "Jailhouse Rock",
    finish: ["Grilled chicken breast 100g", "Fresh avocado"],
    price: 16,
    image: presleySectionImg,
  },
  {
    id: 505,
    category: "Presley Stacks",
    dish_name: "Love Me Tender",
    finish: ["Wilted spinach", "Smoked salmon 70g"],
    price: 16,
    image: presleySectionImg,
  },
];
