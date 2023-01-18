import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handlePage = (e) => {
    console.log("kk");
    <Navigate to={"/auth/login"} />;

  };
  const handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    const nemail = email.trim();
    const npassword = password.trim();
    const nconfirmPassword = confirmPassword.trim();
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
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
    if (!nconfirmPassword) {
      confirmPasswordError = "Confirm Password is required";
    } else if (nconfirmPassword !== npassword) {
      confirmPasswordError = "Confirm Password must match Password";
    }
    if (emailError || passwordError || confirmPasswordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
      return;
    }
    let postBody = {
      email: email,
      name: name,
      password: password,
      phone: phone,
      RePassword: confirmPassword,
    };
    console.log("hit");
    fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => {
        console.log(response.json().then((res) => console.log(res)));
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
            <p className="text-red-500 text-xs italic">{emailError}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="confirmPassword"
            >
              confirmPassword
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="******************"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <p className="text-red-500 text-xs italic">
              {confirmPasswordError}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={handlePage}
            >
              Already have a account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
