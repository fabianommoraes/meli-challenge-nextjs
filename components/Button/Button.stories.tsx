import React from "react";
import Button from "./Button";

const story = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Default = () => <Button onClick={() => {}}>Botão Primário</Button>;
