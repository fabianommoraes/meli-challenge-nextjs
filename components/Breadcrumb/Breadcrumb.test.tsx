import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb tests", () => {
  it("should render all the categories and the correct amount", () => {
    const categories = ["Categoria1", "Categoria2", "Categoria3"];

    const categoriesLength = categories.length;

    render(<Breadcrumb categories={categories} />);

    const category1 = screen.getByText("Categoria1");
    const category2 = screen.getByText("Categoria2");
    const category3 = screen.getByText("Categoria3");

    expect(category1).toBeInTheDocument();
    expect(category2).toBeInTheDocument();
    expect(category3).toBeInTheDocument();

    const breadcrumb = screen.getAllByTestId("breadcrumb");
    expect(breadcrumb).toHaveLength(3);
  });
});
