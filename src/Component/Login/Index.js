import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Index;
