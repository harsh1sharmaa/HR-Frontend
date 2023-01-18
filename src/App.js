import "./App.css";
import { navigation, NavLink } from "react-router-dom";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Component/Info/Info";
import Register from "./Component/Register/Register";
import Dashboard from "./Component/Dashboard/Dashboard";
import Mainpage from "./Component/Mainpage/Mainpage";
import Inputfield from "./Component/Input/Inputfield";
import Login from "./Component/Sample/Login";
import Container from "./Component/Container";

function App() {
  return (
    <div>
      {/* <h2 className="text-slate-10">hekllo</h2> */}
      <BrowserRouter>
        {/* <Routes>
          <Route path="auth" element={<Login />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes> */}
        {/* <Info/> */}
        {/* <Login/>
        <Mainpage/> */}
        <Container/>
        {/* <Login/> */}
        {/* <Inputfield type="password" placeholder="Enter your password" /> */}
      </BrowserRouter>
      {/* <Dashboard/> */}
     
    </div>
  );
}

export default App;
