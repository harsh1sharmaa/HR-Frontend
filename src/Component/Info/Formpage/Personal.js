import React from "react";
import Inputfield from "../../Input/Inputfield";

const Personal = ({info,setInfo}) => {
  return (
    <>
      <div className="f-input">
        {/* <label>name</label>
        <input type="text"  placeholder="name" /> */}
        <Inputfield type="text"  value={info.phone} onChange={(e)=>setInfo({...info,phone:e.target.value}) } placeholder="phone" />
      </div>
      <div className="f-input">
        {/* <label>state</label>
        <input type="text"  placeholder="state" /> */}
        <Inputfield type="text" value={info.city} onChange={(e)=>setInfo({...info,city:e.target.value}) } placeholder="city" />
      </div>
      <div className="f-input">
        {/* <label>ID</label>
        <input type="text" placeholder="ID" /> */}
        <Inputfield type="text" value={info.gender} onChange={(e)=>setInfo({...info,gender:e.target.value}) } placeholder="gender" />
      </div>
    </>
  );
};

export default Personal;
