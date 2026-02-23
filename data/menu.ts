import { MenuItem } from "../types/menu";

import { baconEgg } from "./baconegg";
import { benny } from "./benny";
import { genius } from "./genius";
import { lamb } from "./lamb";
import { oats } from "./oats";
import { pizza } from "./pizza";
import { presley } from "./presley";

export const menu: MenuItem[] = [
  ...benny,
  ...presley,
  ...lamb,
  ...pizza,
  ...genius,
  ...baconEgg,
  ...oats,
];
