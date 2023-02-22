import React from "react";
import { NavLink } from "react-router-dom";
import Navwrapper from "../../Navwrapper/Navwrapper";
import { Sidebardata } from "./Sidebardata";

const Sidebar = () => {
  console.log(Sidebardata);
  return (
    <div className="side">
      {Sidebardata.map((item, index) => {
        
        return <Navwrapper to={item.path} text={item.name} />;
      })}
    </div>
  );
};

export default Sidebar;
