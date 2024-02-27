import React from "react";
import ProductDetails from "./ProductDetails";
import idemDetail from "../../shared/mock/itemDetail.json";

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

export const WithCategories = () => (
  <ProductDetails productDetails={idemDetail} />
);
