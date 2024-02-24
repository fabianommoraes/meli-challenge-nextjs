import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchResults from "./SearchResults";

describe("VictoryMessage tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<SearchResults />);

    const winner = screen.getByText("Dead Unicorn wins!");
    expect(winner).toBeInTheDocument();
  });
});
