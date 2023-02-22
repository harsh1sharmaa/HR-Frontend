import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import Info from "./Info/Info";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Mainpage from "./Mainpage/Mainpage";
import Leave from "./Mainpage/Pages/Leave";
import Attendance from "./Mainpage/Pages/Attendance";
import Dashboard from "./Mainpage/Pages/Dashboard";


const Container = () => {
  const leavesdata = [
    {
      userId: "UUEJIRmadrEsG",
      leaveId: "5345",
      name: "hasgs",
      to: "12",
      from: "15",
      status: "pending",
      reason: "x",
    },
    {
      userId: "UUEJIRma0gdrEsG",
      leaveId: "53mfgvh45",

      name: "hasregs",
      to: "12",
      from: "15",
      status: "Aproved",
      reason: "x",
    },
    {
      userId: "UUEJIRma0gdrEsG",
      name: "hasregs",
      to: "12",
      from: "15",
      status: "Rejected",
      reason: "x",
      leaveId: "53tyrd45",
    },
    {
      userId: "UUEJIRma0gdrEsG",
      name: "hasregs",
      to: "12",
      from: "15",
      status: "pending",
      reason: "x",
      leaveId: "55675rtyh345",
    },
    {
      userId: "UUEJIRma0gdrEsG",
      name: "hasregs",
      to: "12",
      from: "15",
      status: "pending",
      reason: "x",
      leaveId: "534yyre5",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/home" element={<Mainpage/>} >
          <Route path="dash" element={<Dashboard />} />
          <Route path="info" element={<Info />} />
          <Route path="leave" element={<Leave />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="*" element={<>NO Page Found 2</>} />
 
        </Route>
        <Route path="*" element={<Navigate to={'/auth/login'}/>} />
      </Routes>
    </div>
  );
};

export default Container;
