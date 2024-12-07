import { CreateOffer, Offer } from "../../types/offer";
import { httpClient } from "../HttpClient";

async function getAllSellOffers() {
  const { data } = await httpClient.get<Offer[]>("/offers/sell");

  return data;
}
async function getAllBuyOffers() {
  const { data } = await httpClient.get<Offer[]>("/offers/buy");

  return data;
}

async function createOffer(offer: CreateOffer) {
  const { data } = await httpClient.post<Offer>("/offers", offer);

  return data;
}

export const offerService = {
  getAllSellOffers,
  getAllBuyOffers,
  createOffer,
};
