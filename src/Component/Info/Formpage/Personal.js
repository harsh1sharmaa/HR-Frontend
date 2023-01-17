import React from "react";
import Inputfield from "../../Input/Inputfield";

const Personal = () => {
  return (
    <>
      <div className="f-input">
        {/* <label>name</label>
        <input type="text"  placeholder="name" /> */}
        <Inputfield type="text" placeholder="email" />
      </div>
      <div className="f-input">
        {/* <label>state</label>
        <input type="text"  placeholder="state" /> */}
        <Inputfield type="text" placeholder="email" />
      </div>
      <div className="f-input">
        {/* <label>ID</label>
        <input type="text" placeholder="ID" /> */}
        <Inputfield type="text" placeholder="email" />
      </div>
    </>
  );
};

export default Personal;
