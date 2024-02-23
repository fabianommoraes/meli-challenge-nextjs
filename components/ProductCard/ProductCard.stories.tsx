import React from "react";
import ProductCard from "./ProductCard";

const story = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Primary = () => <ProductCard />;
