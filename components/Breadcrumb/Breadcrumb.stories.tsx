import React from "react";
import Breadcrumb from "./Breadcrumb";

const story = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => (
  <Breadcrumb
    categories={[
      "Categoria1",
      "Categoria2",
      "Categoria3",
      "Categoria4",
      "Categoria5",
      "Categoria6 "
    ]}
  />
);
