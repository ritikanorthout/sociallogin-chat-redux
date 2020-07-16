import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ component: Component, ...rest }) => {
  const data = useSelector((state) => state);

  // let dat = JSON.parse(sessionStorage.getItem("userData"));
  // console.log(data.isLoggedin);
  // // console.log(dat.isLoggedin);
  return (
    <Route
      {...rest}
      render={() =>
        data.isLoggedin ? <Component data={data} /> : <Redirect to="/" />
      }
    />
  );
};

export default Protected;
