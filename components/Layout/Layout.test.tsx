import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

describe("Layout tests", () => {
  beforeEach(async () => {
    const useRouter = jest.spyOn(require("next/router"), "useRouter");

    useRouter.mockImplementation(() => ({
      route: "/"
    }));
  });

  it("should render the children", () => {
    render(
      <Layout>
        <div>test</div>
      </Layout>
    );

    const children = screen.getByText("test");
    expect(children).toBeInTheDocument();
  });
});
