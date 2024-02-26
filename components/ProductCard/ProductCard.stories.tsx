import React from "react";
import ProductCard from "./ProductCard";
import searchResultItem from "../../shared/mock/searchResultItem.json";

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

export const Default = () => <ProductCard item={searchResultItem} />;
