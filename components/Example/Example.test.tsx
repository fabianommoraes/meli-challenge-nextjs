import "@testing-library/jest-dom";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Example from "./Example";
import fetchMock from "jest-fetch-mock";

describe("Example tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the cost", async () => {
    fetchMock.mockResponse(
      JSON.stringify({
        options: [
          {
            cost: 30
          }
        ]
      }),
      {
        status: 200
      }
    );
    render(<Example />);

    const button = screen.getByRole("button", { name: "Calcular" });

    act(() => {
      button.click();
    });

    await waitFor(() => {
      const cost = screen.getByText(/30/i);
      expect(cost).toBeInTheDocument();
    });
  });
});
