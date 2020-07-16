import React from "react";
// import  from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../components/constant/type";
export default function Header() {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div>
      <div className="callout primary" id="Header">
        <div className="row column">
          <button className="logouButton" onClick={Logout}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
}
