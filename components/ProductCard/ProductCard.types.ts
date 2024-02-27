import { Price } from "@/shared/types";

export type ProductCardProps = {
  item: Item;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  state?: string;
};
