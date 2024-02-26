import React from "react";
import SearchResults from "./SearchResults";
import searchResultItems from "../../shared/mock/searchResultItems.json";

const story = {
  title: "Components/SearchResults",
  component: SearchResults,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => (
  <SearchResults searchResultItems={searchResultItems} />
);
