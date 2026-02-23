import { MenuItem } from "../types/menu";

import { baconEgg } from "./baconegg";
import { beefMince } from "./beefmince";
import { benny } from "./benny";
import { breakfastSpl } from "./breakfastspl";
import { burgers } from "./burgers";
import { crepes } from "./crepes";
import { croissants } from "./croissant";
import { frenchToast } from "./frenchtoast";
import { fruitSalads } from "./fruitsalad";
import { genius } from "./genius";
import { lamb } from "./lamb";
import { lambFry } from "./lambfry";
import { oats } from "./oats";
import { oldSalty } from "./oldsalty";
import { omelette } from "./omelette";
import { pancakes } from "./pancakes";
import { pies } from "./pie";
import { pizza } from "./pizza";
import { presley } from "./presley";
import { sandwiches } from "./sandwiches";
import { vegetableRosti } from "./vegetablerosti";
import { waffles } from "./waffles";
export const menu: MenuItem[] = [
  ...benny,
  ...presley,
  ...lamb,
  ...pizza,
  ...genius,
  ...baconEgg,
  ...oats,
  ...lambFry,
  ...breakfastSpl,
  ...oldSalty,
  ...beefMince,
  ...omelette,
  ...crepes,
  ...frenchToast,
  ...pancakes,
  ...waffles,
  ...croissants,
  ...fruitSalads,
  ...vegetableRosti,
  ...pies,
  ...burgers,
  ...sandwiches,
];
