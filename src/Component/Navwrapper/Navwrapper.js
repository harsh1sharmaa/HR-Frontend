import React from "react";
import { NavLink } from "react-router-dom";
import './Navwrapper.css';

const Navwrapper = ({ to, text }) => {
  return (
    <div className="nav-wrapper" id="wrapper">
      <NavLink to={to}>{text}</NavLink>
    </div>
  );
};

export default Navwrapper;
