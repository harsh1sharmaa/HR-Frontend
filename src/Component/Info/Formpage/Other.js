import React from "react";
import Inputfield from "../../Input/Inputfield";

const Other = () => {
  return (
    
      <>
        <div  className="f-input">
          {/* <label>phone no</label> */}
          {/* <input type="text" placeholder="phone no" /> */}
        <Inputfield type="text"  placeholder="phone no"/>

        </div>
        <div  className="f-input">
          {/* <label>xyz</label>
          <input type="text"  placeholder="xyz" /> */}
        <Inputfield type="text"  placeholder="xyz"/>

        </div>
        <div  className="f-input">
          {/* <label>state</label>
          <input type="text"  placeholder="state" /> */}
        <Inputfield type="text"  placeholder="state"/>

        </div>
      </>
    
  );
};

export default Other;
