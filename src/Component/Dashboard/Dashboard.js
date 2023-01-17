import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex w-full">
        <div className="bg-blue-500 w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5" style={{ backgroundColor: "green" }}>
          Dashboard
        </div>
      </div>
    </>
  );
};

export default Dashboard;
