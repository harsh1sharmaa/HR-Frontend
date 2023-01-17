import React, { useState } from "react";
const Signup = () => {
  const [email, setEmail] = useState("");
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
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    // console.log("eeee")
    e.preventDefault();
    const email = email.trim();
    const password = password.trim();
    const confirmPassword = confirmPassword.trim();
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    if (!email) {
      emailError = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      emailError = "Invalid email address";
    }
    if (!password) {
      passwordError = "Password is required";
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters";
    }
    if (!confirmPassword) {
      confirmPasswordError = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      confirmPasswordError = "Confirm Password must match Password";
    }
    if (emailError || passwordError || confirmPasswordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
      return;
    }
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
        <form   className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit=
          {handleSubmit} >
        
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
            <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
        
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;