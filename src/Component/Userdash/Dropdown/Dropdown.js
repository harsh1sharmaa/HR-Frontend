import { useState } from "react";
import React from "react";
import Button from "../../Button/Button";

const Dropdown = () => {
  const [value, setValue] = useState ("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const markLogin = () => {
   console.log("login success->",value)
   console.log("login success")
  };
  return (
    <div>
      <label>
        What do we eat?
        <select value={value} onChange={handleChange}>
          <option value="fruit">Fruit</option>

          <option value="vegetable">Vegetable</option>

          <option value="meat">Meat</option>
        </select>
      </label>

      <p>We eat {value}!</p>

      <button onClick={markLogin}>signin</button>
    </div>
  );
};

export default Dropdown;
