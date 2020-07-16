import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Public from "./router/Public";
import Protected from "./router/Protected";
import Register from "./components/Register/register";
import Chat from "./components/Chat/Chat";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Protected path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Public path="/" exact component={Login} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
