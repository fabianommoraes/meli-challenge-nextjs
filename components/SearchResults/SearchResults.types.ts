import { Author, Categories, Price } from "@/shared/types";

export type SearchResultsProps = {
  searchResultItems: ItemSearch[];
};

export type SearchResults = {
  author: Author;
  items: ItemSearch[];
  categories: Categories;
};

export type ItemSearch = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
};
