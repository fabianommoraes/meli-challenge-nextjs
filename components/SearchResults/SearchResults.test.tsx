import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchResults from "./SearchResults";
import searchResultItems from "../../shared/mock/searchResultItems.json";

describe("SearchResults tests", () => {
  it("should render all the items search", () => {
    render(<SearchResults searchResultItems={searchResultItems} />);
    const length = searchResultItems.length;
    const items = screen.getAllByRole("link");
    expect(items).toHaveLength(length);
  });
});
