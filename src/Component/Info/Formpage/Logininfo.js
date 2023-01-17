import React from "react";
import Inputfield from "../../Input/Inputfield";

const Logininfo = () => {
  return (
    <>
      <div className="f-input">
        {/* <label>email</label>
        <input type="text"  placeholder="email" /> */}
        <Inputfield type="text"  placeholder="email"/>
      </div>
      <div  className="f-input">
        {/* <label>password</label>
        <input type="text"  placeholder="password" /> */}
        <Inputfield type="text"  placeholder="password"/>

      </div>
      <div  className="f-input">
        {/* <label>confirm password</label>
        <input type="password"  placeholder="confirm password" /> */}
        <Inputfield type="password"  placeholder="confirm password"/>

        
      </div>
    </>
  );
};

export default Logininfo;
