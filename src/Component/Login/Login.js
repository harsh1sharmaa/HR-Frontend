import React, { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Loginform from "./Loginform";
import "./login.css";

const Login = () => {
  let navigation=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    const nemail = email.trim();
    const npassword = password.trim();
    let emailError = "";
    let passwordError = "";
    if (!nemail) {
      emailError = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(nemail)) {
      emailError = "Invalid email address";
    }
    if (!npassword) {
      passwordError = "Password is required";
    } else if (npassword.length < 6) {
      passwordError = "Password must be at least 6 characters";
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return;
    }
    let postBody = {
      email: email,
      password: password,
    };
    console.log("hit");
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => {
        console.log(response.json().then((res) => {
          console.log(res)
          if(res.success){
            localStorage.setItem("userToken",res.data.userToken);
            console.log("in if")
          navigation("/home", { state: { status: 'login' } });

          }
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <p className="text-red-500 text-xs italic">{emailError}</p>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
