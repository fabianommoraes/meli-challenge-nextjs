import React from "react";
import SearchBar from "./SearchBar";

const story = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => <SearchBar />;
