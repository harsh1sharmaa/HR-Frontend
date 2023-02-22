import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import Holidays from './Holidays/Holidays'
import './admindash.css'
import Userinfo from './Userinfo/Userinfo'

const Admindash = () => {
    return (
        <div className="user-dropdown">
           {/* <Dropdown/> */}
           <Holidays/>
           <Userinfo/>
            
        </div>
    )
}

export default Admindash
