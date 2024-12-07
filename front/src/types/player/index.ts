import { Inventory } from "../inventory";
import { Offer } from "../offer";

export interface Player {
  id: string;
  nickname: string;
  goldAmount: number;
  inventory: Inventory[];
  offers: Offer[];
}
