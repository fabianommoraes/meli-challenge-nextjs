import "@testing-library/jest-dom";
import { renderWithProviders as render } from "../../shared/test-utils";
import { screen } from "@testing-library/react";
import React from "react";
import Loading from "./Loading";

describe("Loading tests", () => {
  it("should render if isLoading is true", () => {
    render(<Loading />, {
      preloadedState: {
        monsters: {
          monsterList: [],
          selectedMonsterId: "",
          computerMonsterId: "",
          winnerName: "",
          isLoading: true
        }
      }
    });

    const progressbar = screen.getByTestId("loading");

    expect(progressbar).toHaveStyle("opacity: 1");
    expect(progressbar).toHaveStyle("visibility: visible");
  });

  it("should not render if isLoading is false", () => {
    render(<Loading />, {
      preloadedState: {
        monsters: {
          monsterList: [],
          selectedMonsterId: "",
          computerMonsterId: "",
          winnerName: "",
          isLoading: false
        }
      }
    });

    const progressbar = screen.getByTestId("loading");

    expect(progressbar).toHaveStyle("opacity: 0");
    expect(progressbar).toHaveStyle("visibility: hidden");
  });
});
