import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ProductDetails from "./ProductDetails";
import idemDetail from "../../shared/mock/itemDetail.json";

describe("ProductDetails tests", () => {
  it("should render the attribute name and stat bar", () => {
    render(
      <ProductDetails
        productDetails={idemDetail}
        hasCategories={Boolean(idemDetail.categories)}
      />
    );
    const encodedUrl = encodeURIComponent(idemDetail.item.picture);

    const title = screen.getByText(/Sony Playstation 5/i);
    const amount = screen.getByText(/1172000/i);
    const decimals = screen.getByTestId("decimals");
    const condition = screen.getByText(/new/i);
    const soldQuantity = screen.getByTestId("soldQuantity");
    const description = screen.getByText(/Con tu consola PlayStation 5/i);
    const image = screen.getByAltText(/Sony Playstation 5/i);

    expect(title).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(decimals).toBeInTheDocument();
    expect(condition).toBeInTheDocument();
    expect(soldQuantity).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      `/_next/image?url=${encodedUrl}&w=1920&q=75`
    );
  });
});
