import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="p-5">
        <NavLink to="home">home</NavLink>
      </div>
      <div className="p-5">
        <NavLink to="home">ingo</NavLink>
      </div>
      <div className="p-5">
        <NavLink to="home">leave</NavLink>
      </div>
      <div className="p-5">
        <NavLink to="home">logout</NavLink>
      </div>
    </>
  );
};

export default Sidebar;
