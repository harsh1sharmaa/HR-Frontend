import React from "react";
import './Inputfield.css'

const Inputfield = ({type="text", placeholder="",value=""}) => {
  return (
    <>
     <input type={type} name="text" class="input" placeholder={placeholder} value={value}/>
    </>
  );
};

export default Inputfield;
