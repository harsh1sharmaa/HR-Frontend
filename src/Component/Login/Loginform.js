import React from "react";
import Inputfield from "../Input/Inputfield";

const Loginform = () => {
  return (
    <>
      <div className="f-input">
        {/* <label>phone no</label> */}
        {/* <input type="text" placeholder="phone no" /> */}
        <Inputfield type="email" placeholder="email" />
      </div>
      <div className="f-input">
        {/* <label>xyz</label>
          <input type="text"  placeholder="xyz" /> */}
        <Inputfield type="password" placeholder="password" />
      </div>
    </>
  );
};

export default Loginform;
