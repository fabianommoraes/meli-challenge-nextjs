import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ProductCard from "./ProductCard";
import searchResultItem from "../../shared/mock/searchResultItem.json";

describe("ProductCard tests", () => {
  it("should render all data", () => {
    render(<ProductCard item={searchResultItem} />);

    const encodedUrl = encodeURIComponent(searchResultItem.picture);

    const title = screen.getByText(/Sony Playstation 4 Slim/i);
    const price = screen.getByText(/540000/i);
    const image = screen.getByAltText(/Sony Playstation 4 Slim/i);
    const freeShipping = screen.getByAltText(/free shipping/i);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      `/_next/image?url=${encodedUrl}&w=384&q=75`
    );
    expect(freeShipping).toBeInTheDocument();
  });

  it("should not render free shipping if attribute is false", () => {
    searchResultItem.free_shipping = false;

    render(<ProductCard item={searchResultItem} />);
    const freeShipping = screen.queryByAltText(/free shipping/i);

    expect(freeShipping).not.toBeInTheDocument();
  });
});
