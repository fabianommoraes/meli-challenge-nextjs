import { Author, Categories, Price } from "@/shared/types";

export type ProductDetailsProps = {
  productDetails: ProductDetails;
};

export type ProductDetails = {
  author: Author;
  item: Item;
  categories: Categories;
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
