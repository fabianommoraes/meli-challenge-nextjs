import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchBar from "./SearchBar";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

const pushMock = jest.fn();

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("SearchBar tests", () => {
  beforeEach(async () => {
    useRouter.mockReturnValue({
      query: {},
      push: pushMock
    });
  });

  it("should call the search function with any string", () => {
    render(<SearchBar />);

    const button = screen.getByRole("button", { name: "buscar" });
    const input = screen.getByRole("textbox", {
      name: "Digite o que você deseja encontrar"
    });
    fireEvent.change(input, { target: { value: "playstation" } });
    button.click();
    expect(pushMock).toHaveBeenCalled();
  });

  it("should not call the search function if no value", () => {
    render(<SearchBar />);

    const button = screen.getByRole("button", { name: "buscar" });
    button.click();
    expect(pushMock).not.toHaveBeenCalled();
  });
});
