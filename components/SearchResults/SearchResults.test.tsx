import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchResults from "./SearchResults";
import searchResultItems from "../../shared/mock/searchResultItems.json";

describe("SearchResults tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<SearchResults searchResultItems={searchResultItems} />);

    const winner = screen.getByText("Dead Unicorn wins!");
    expect(winner).toBeInTheDocument();
  });
});
