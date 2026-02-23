export type MenuItem = {
  id: number;
  category: string;
  dish_name: string;

  // Optional fields
  ingredients?: string[];
  finish?: string[];

  price?: number;
  price_full?: number;
  price_half?: number | null;

  image?: any;
};
