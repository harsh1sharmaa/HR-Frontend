import React from 'react'
import Calender from '../../Calender/Calender'
import './pages.css'

const Two = ({leavesdata}) => {
    console.log(leavesdata)
    return (
        <div>
            attendance
            <div className="card">
             <Calender/>
            </div>
        </div>
    )
}

export default Two
