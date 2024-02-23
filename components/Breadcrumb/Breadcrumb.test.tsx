import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Breadcrumb from "./Breadcrumb";

describe("VictoryMessage tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(<Breadcrumb />);

    const winner = screen.getByText("Dead Unicorn wins!");
    expect(winner).toBeInTheDocument();
  });
});
