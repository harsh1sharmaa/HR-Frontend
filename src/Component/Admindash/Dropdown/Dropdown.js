import { useState } from "react";
import React from "react";
import Button from "../../Button/Button";

const Dropdown = () => {
  const [value, setValue] = useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const markLogin = () => {
    var today = new Date();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    console.log("login success->", value);
    console.log(time, "--", date);
    //call post API here
  };
  return (
    <div>
      <label>
        Working location
        <select value={value} onChange={handleChange}>
          <option value="WFO">WFO</option>
          <option value="WFH">WFH</option>
        </select>
      </label>

      <p>Working from {value}</p>

      <button onClick={markLogin}>signin</button>
    </div>
  );
};

export default Dropdown;
