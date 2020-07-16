import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Public = ({ component: Component, ...rest }) => {
  const data = useSelector((state) => state);
  // let dat = JSON.parse(sessionStorage.getItem("userData"));
  console.log(data);
  return (
    <Route
      {...rest}
      render={() =>
        data.isLoggedin ? <Redirect to="/home" /> : <Component data={data} />
      }
    />
  );
};

export default Public;
