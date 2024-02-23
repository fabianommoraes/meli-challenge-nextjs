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

export const Primary = () => <Breadcrumb />;
