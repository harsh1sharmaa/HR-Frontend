import React from "react";
import { Route, Routes,Navigate } from "react-router-dom";
import Info from "./Info/Info";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Mainpage from "./Mainpage/Mainpage";
import The from "./Mainpage/Pages/The";
import Two from "./Mainpage/Pages/Two";
import Dashboard from "./Mainpage/Pages/Dashboard";


const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/home" element={<Mainpage/>} >
          <Route path="dash" element={<Dashboard/>} />
          <Route path="info" element={<Info />} />
          <Route path="the" element={<The />} />
          <Route path="two" element={<Two />} />
          <Route path="*" element={<>NO Page Found 2</>} />
 
        </Route>
        <Route path="*" element={<Navigate to={'/auth/login'}/>} />
      </Routes>
    </div>
  );
};

export default Container;
