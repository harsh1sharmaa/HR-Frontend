import React from "react";
import Inputfield from "../../Input/Inputfield";

const Other = ({info,setInfo}) => {
  return (
    
      <>
        <div  className="f-input">
          {/* <label>phone no</label> */}
          {/* <input type="text" placeholder="phone no" /> */}
        <Inputfield type="text" value={info.age} onChange={(e)=>setInfo({...info,age:e.target.value}) } placeholder="age"/>

        </div>
        <div  className="f-input">
          {/* <label>xyz</label>
          <input type="text"  placeholder="xyz" /> */}
        <Inputfield type="text" value={info.shift} onChange={(e)=>setInfo({...info,shift:e.target.value}) }  placeholder="shift"/>

        </div>
        <div  className="f-input">
          {/* <label>state</label>
          <input type="text"  placeholder="state" /> */}
        <Inputfield type="text" value={info.company} onChange={(e)=>setInfo({...info,company:e.target.value}) }  placeholder="company"/>

        </div>
      </>
    
  );
};

export default Other;
