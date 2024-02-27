import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ProductDetails from "./ProductDetails";
import idemDetail from "../../shared/mock/itemDetail.json";

describe("ProductDetails tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the attribute name and stat bar", () => {
    fetchMock.mockResponse(
      JSON.stringify({
        options: [
          {
            cost: 30
          }
        ]
      }),
      {
        status: 200
      }
    );
    render(<ProductDetails productDetails={idemDetail} />);
    const encodedUrl = encodeURIComponent(idemDetail.item.picture);

    const title = screen.getByText(/Sony Playstation 5/i);
    const amount = screen.getByText(/1.099.999/i);
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

  it("should call the Buy button function", () => {
    fetchMock.mockResponse(
      JSON.stringify({
        options: [
          {
            cost: 30
          }
        ]
      }),
      {
        status: 200
      }
    );
    console.log = jest.fn();

    render(<ProductDetails productDetails={idemDetail} />);

    const button = screen.getByRole("button", { name: "Comprar" });

    button.click();
    expect(console.log).toHaveBeenCalledWith("comprou!");
  });
});
