import React from "react";
import Error404 from "./404";

const story = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => <Error404 />;
