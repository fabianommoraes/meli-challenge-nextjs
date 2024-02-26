import { ParsedUrlQuery } from "querystring";
import { SearchResults } from "@/components/SearchResults/SearchResults.types";

export type Author = {
  name: string;
  lastname: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: string;
};

export type Categories = string[];

export type SearchResultsPageProps = {
  searchResults: SearchResults;
};

export interface Params extends ParsedUrlQuery {
  id: string;
}
