import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../store";

it("Welcome renders without crashing", () => {
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
      <Login {...initialState} />
    </Provider>,
    div
  );
  expect(div).toMatchSnapshot();
});

// eslint-disable-next-line import/no-unresolved
// import { render } from '../../../test-utils';
// import { MenuItem } from './menu-item';

// describe('Menu Items', () => {
//   it('renders without error', () => {
//     const { asFragment, container } = render(<MenuItem onClick={() => {}} item="" />);
//     const list = container.getElementsByTagName('li');
//     expect(list).toHaveLength(1);

//     expect(asFragment()).toMatchSnapshot();
//   });
//   it('renders with logout item', () => {
//     const { asFragment, container } = render(<MenuItem onClick={() => {}} item="Logout" />);
//     const list = container.getElementsByTagName('li');
//     expect(list).toHaveLength(1);

//     expect(asFragment()).toMatchSnapshot();
//   });
// });
