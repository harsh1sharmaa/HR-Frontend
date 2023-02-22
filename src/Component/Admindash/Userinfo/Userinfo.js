import React, { useState, useEffect } from "react";
import { userinfo, leavesdata } from "./api";
const Userinfo = () => {
  const [leaves, setLeaves] = useState([]);
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("g");
  const getleaves = (e) => {
    e.preventDefault();
    let userId = e.currentTarget.getAttribute("value");
    console.log(userId);
    console.log(e.currentTarget.getAttribute("value"));
  };

  //get all logins of usrs
  const getLogins = (e) => {
    e.preventDefault();

    console.log("--", e.currentTarget.getAttribute("value"));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
    console.log("leaveId=", e.target.name,"--","chnageleaveStatus",e.target.value);
  };

  useEffect(() => {
    setLeaves(leavesdata);
  }, []);

  return (
    <div>
      <div>
        {userinfo.map((item) => {
          return (
            <div>
              <button value={item.userId} onClick={getleaves}>
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>status</th>
            <th>action</th>
          </tr>

          {leaves.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>
                  <select value={item.status}name={item.leaveId} onChange={handleChange}>
                    <option value="pending">pending</option>
                    <option value="Aproved">Aproved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Userinfo;
