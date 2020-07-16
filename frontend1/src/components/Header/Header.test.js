import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../store";

it("Header renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Header />
    </Provider>,
    div
  );

  expect(div).toMatchSnapshot();
});
