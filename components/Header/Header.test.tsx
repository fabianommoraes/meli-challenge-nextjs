import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header tests", () => {
  beforeEach(async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    useRouter.mockImplementation(() => ({
      route: "/"
    }));
  });

  it("should render the logo", () => {
    render(<Header />);

    const logo = screen.getByRole("img", { name: "Logo Mercado Libre" });

    expect(logo).toHaveAttribute(
      "src",
      "/_next/image?url=%2Flogo_ml.png&w=128&q=75"
    );
    expect(logo).toBeInTheDocument();
  });
});
