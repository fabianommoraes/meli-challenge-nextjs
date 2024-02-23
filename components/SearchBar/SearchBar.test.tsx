import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";

describe("VictoryMessage tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<SearchBar />);

    const winner = screen.getByText("Dead Unicorn wins!");
    expect(winner).toBeInTheDocument();
  });
});
