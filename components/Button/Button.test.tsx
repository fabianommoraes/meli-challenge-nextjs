import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button tests", () => {
  it("should render the correct text", () => {
    const onClick = jest.fn;

    render(<Button onClick={onClick}>Comprar</Button>);

    const text = screen.getByText("Comprar");
    expect(text).toBeInTheDocument();
  });

  it("should call the onclick function", () => {
    const clickHandler = jest.fn();

    render(<Button onClick={clickHandler}>Comprar</Button>);
    const button = screen.getByRole("button", { name: "Comprar" });

    button.click();
    expect(clickHandler).toHaveBeenCalled();
  });
});
