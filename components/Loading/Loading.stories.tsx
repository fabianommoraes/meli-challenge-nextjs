import React from "react";
import withRedux from "../../shared/withRedux";
import { loading, emptyMock } from "../../shared/mock";
import Loading from "./Loading";

const story = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
    fetchMock: {
      mocks: []
    }
  }
};

export default story;

export const Open = () => <Loading />;
Open.decorators = [withRedux(loading)];

export const Close = () => <Loading />;
Close.decorators = [withRedux(emptyMock)];
