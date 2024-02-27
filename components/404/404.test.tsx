import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Error404 from "./404";

describe("Error404 tests", () => {
  it("should render icon and text", () => {
    render(<Error404 />);

    const icon = screen.getByLabelText("notFoundIcon");
    const text = screen.getByRole("heading", {
      name: "Parece que esta página no existe"
    });

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
