import { ParsedUrlQuery } from "querystring";

export type ProductDetailsProps = {
  productDetails: ProductDetails;
};

export type ProductDetails = {
  author: Author;
  item: Item;
};

export type Author = {
  name: string;
  lastname: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
};

export interface Params extends ParsedUrlQuery {
  id: string;
}
