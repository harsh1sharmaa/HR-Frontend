import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import Holidays from './Holidays/Holidays'
import './userdash.css'

const Userdash = () => {
    return (
        <div className="user-dropdown">
           <Dropdown/>
           <Holidays/>
            
        </div>
    )
}

export default Userdash
