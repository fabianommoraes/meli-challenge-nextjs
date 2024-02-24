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

const item = {
  id: "MLA1437406762",
  title: "Sony Playstation 4 Slim Cuh-20 1tb Standard  Color Negro Azabache",
  price: {
    currency: "ARS",
    amount: 540000,
    decimais: null
  },
  picture: "http://http2.mlstatic.com/D_798586-MLA40076060236_122019-I.jpg",
  condition: "new",
  free_shipping: true
};

export default story;

export const Primary = () => <ProductCard item={item} />;
