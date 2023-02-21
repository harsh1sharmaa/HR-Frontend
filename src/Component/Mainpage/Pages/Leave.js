import React, { useState } from "react";
import "./pages.css";

const Leave = () => {
  const [leaveObj, setleaveObj] = useState({
    name: "",
    reportingPerson: "",
    start: "",
    end: "",
    describe: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(leaveObj);
    alert("You have submitted");
  };

  const handleChange = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setleaveObj({ ...leaveObj, [name]: value });
  };
  return (
    <>
     <div className="leave-page"> 
      <div className="card card-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name </label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={leaveObj.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="reportingPerson">Reporting person </label>
            <br></br>
            <input
              type="text"
              id="reportingPerson"
              name="reportingPerson"
              value={leaveObj.reportingPerson}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="start">Reporting Name </label>
            <br></br>
            <input
              type="text"
              id="start"
              name="start"
              value={leaveObj.start}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="end">Reporting Name </label>
            <br></br>
            <input
              type="text"
              id="end"
              name="end"
              value={leaveObj.end}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="describe">Reporting Name </label>
            <br></br>
            <input
              type="text"
              id="describe"
              name="describe"
              value={leaveObj.describe}
              onChange={handleChange}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
      <div className="leave-status">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>leave</th>
              <th>status</th>
              <th>status</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones </td>
              <td>pending</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>pending</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>pending</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Leave;
