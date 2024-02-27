import { Author, Categories } from "@/shared/types";
import { Item } from "../ProductCard/ProductCard.types";

export type SearchResultsProps = {
  searchResultItems: Item[];
};

export type SearchResults = {
  author: Author;
  items: Item[];
  categories: Categories;
};
