import { Item } from "../item";
import { Player } from "../player";

export enum OfferType {
  BUY = "BUY",
  SELL = "SELL",
}

export interface Offer {
  id: string;
  type: OfferType;
  pricePerUnit: number;
  quantity: number;
  endDate: Date;
  totalValue: number;
  playerId: string;
  player: Player;
  itemId: string;
  item: Item;
}

export interface CreateOffer {
  type: string;
  pricePerUnit: number;
  quantity: number;
  endDate: string;
  totalValue: number;
  playerId: string;
  itemId: string;
}
