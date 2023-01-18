import React from "react";
import Inputfield from "../../Input/Inputfield";

const Education = ({info,setInfo}) => {
  return (
    <>
      <div className="f-input">
        {/* <label>email</label>
        <input type="text"  placeholder="email" /> */}
        <Inputfield type="text" name="10th" value={info.highschool} onChange={(e)=>setInfo({...info,highSchool:e.target.value}) }  placeholder="10th year"/>
      </div>
      <div  className="f-input">
        {/* <label>password</label>
        <input type="text"  placeholder="password" /> */}
        <Inputfield type="text" name="12th" value={info.intermediate} onChange={(e)=>setInfo({...info,intermediate:e.target.value}) }  placeholder="12th year"/>

      </div>
      <div  className="f-input">
        {/* <label>confirm password</label>
        <input type="password"  placeholder="confirm password" /> */}
        <Inputfield type="text" name="btech" value={info.btech} onChange={(e)=>setInfo({...info,highSchool:e.target.value}) }  placeholder="B tech year"/>

        
      </div>
    </>
  );
};

export default Education;
