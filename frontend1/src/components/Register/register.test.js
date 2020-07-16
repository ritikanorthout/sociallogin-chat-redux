import React from "react";
import ReactDOM from "react-dom";
import Register from "./register";
import { Provider } from "react-redux";
import store from "../store";

it("NotFound renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Register />
    </Provider>,
    div
  );
  expect(div).toMatchSnapshot();
});
