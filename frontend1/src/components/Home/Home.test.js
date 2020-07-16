import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "../store";

it("Home renders without crashing", () => {
  const initialState = {
    data: {
      isLoggedin: false,
      userInfo: { name: "", email: "", mobile: "", token: "", imgUrl: "" },
      userList: [],
    },
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Home {...initialState} />
    </Provider>,
    div
  );

  expect(div).toMatchSnapshot();
});
