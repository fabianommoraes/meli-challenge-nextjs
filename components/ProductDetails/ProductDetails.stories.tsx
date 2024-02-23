import React from "react";
import ProductDetails from "./ProductDetails";

const story = {
  title: "Components/ProductDetails",
  component: ProductDetails,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Primary = () => <ProductDetails />;
