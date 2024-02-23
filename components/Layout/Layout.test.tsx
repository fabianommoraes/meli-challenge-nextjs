import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

describe("VictoryMessage tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<Layout />);

    const winner = screen.getByText("Dead Unicorn wins!");
    expect(winner).toBeInTheDocument();
  });
});
