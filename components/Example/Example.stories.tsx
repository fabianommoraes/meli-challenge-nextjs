import React from "react";
import Example from "./Example";

const story = {
  title: "Components/Example",
  component: Example,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: [
        {
          matcher: {
            name: "freteMock",
            url: "https://api.mercadolibre.com/items/MLB2997181655/shipping_options?zip_code=05145000"
          },
          response: {
            status: 200,
            body: {
              options: [
                {
                  cost: 30
                }
              ]
            }
          }
        }
      ]
    }
  }
};

export default story;

export const Default = () => <Example />;
