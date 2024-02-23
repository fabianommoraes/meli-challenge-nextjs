import React from "react";
import Header from "./Header";

const story = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Primary = () => <Header />;
