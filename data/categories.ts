// data/categories.ts

export type Category = {
  id: string;
  title: string;
};

export const categories: Category[] = [
  {
    id: "bennythejets", // must match normalized category
    title: "Benny & The Jets",
  },
  {
    id: "geniusmenu",
    title: "Genius Menu",
  },
  {
    id: "lambshank",
    title: "Lamb Shank",
  },
  {
    id: "pizzas",
    title: "Pizzas",
  },
  {
    id: "presleystacks",
    title: "Presley Stacks",
  },
  {
    id: "baconeggs",
    title: "Bacon & Eggs",
  },
];
