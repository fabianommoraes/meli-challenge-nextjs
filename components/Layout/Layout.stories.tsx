import React from "react";
import Layout from "./Layout";

const story = {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => (
  <Layout>
    <div>Teste!</div>
  </Layout>
);
