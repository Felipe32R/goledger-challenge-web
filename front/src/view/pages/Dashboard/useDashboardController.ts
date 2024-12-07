import { useQuery } from "@tanstack/react-query";

import { offerService } from "../../../services/Offers/offerService";
import { useMemo } from "react";

export function useDashboardController() {
  const { data: sellOffers, isLoading: isLoadingSellOffers } = useQuery({
    queryKey: ["sellOffers"],
    queryFn: async () => {
      return offerService.getAllSellOffers();
    },
  });

  const { data: buyOffers, isLoading: isLoadingBuyOffers } = useQuery({
    queryKey: ["buyOffers"],
    queryFn: async () => {
      return offerService.getAllBuyOffers();
    },
  });

  const isLoadingOffers = useMemo(() => {
    return isLoadingBuyOffers && isLoadingSellOffers;
  }, [isLoadingBuyOffers, isLoadingSellOffers]);

  return { sellOffers, buyOffers, isLoadingOffers };
}
