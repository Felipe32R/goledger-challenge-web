enum ItemType {
  EQUIPMENT = "EQUIPMENT",
  CONSUMABLE = "CONSUMABLE",
}

export interface Item {
  id: string;
  name: string;
  type: ItemType;
  quantity?: number;
}
