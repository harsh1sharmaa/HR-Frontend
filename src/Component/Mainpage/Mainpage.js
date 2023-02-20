import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import './mainpage.css';
import Dashboard from "./Pages/Dashboard";
import Info from "./Pages/Info";
import The from "./Pages/The";
import Two from "./Pages/Attendance";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet, useOutletContext } from "react-router-dom";


const Mainpage = () => {
  return (
    <div>
      <div className="header"><Header/></div>
      <div className="nav-component">
        <div className="sidebar"><Sidebar/></div>
        <div className="pages">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
