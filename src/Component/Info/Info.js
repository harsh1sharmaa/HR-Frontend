import React, { useState } from "react";
import Button from "../Button/Button";
import Education from "./Formpage/Education";
import Other from "./Formpage/Other";
import Personal from "./Formpage/Personal";
import Progression from "../Progressbar/Progressbar";
import "./Info.css";

const Info = () => {
  const formTitle = ["login Info", "personal info", "other info"];
  const progress = ["33.3", "66.6", "100"];
  const [currentPage, setCurrentPage] = useState(0);
  const [info, setInfo] = useState({
    highschool: "",
    intermediate: "",
    btech: "",
    age: "",
    shift: "",
    company: "",
    gender: "",
    phone: "",
    city: "",
  });
  console.log(info);
  const handleSave = (e) => {
    e.preventDefault();

    console.log(info);
  };
  const getPage = () => {
    if (currentPage === 0) {
      return <Education info={info} setInfo={setInfo} />;
    }
    if (currentPage === 1) {
      return <Other info={info} setInfo={setInfo} />;
    }
    if (currentPage === 2) {
      return <Personal info={info} setInfo={setInfo} />;
    }
  };

  return (
    <>
      <div className="login">
        {/* <div className="bar-outlayer"> */}
        <div>
          {" "}
          <Progression now={progress[currentPage]} />{" "}
        </div>
        {/* <div
            className="progressbar"
            style={{
              width:
                currentPage === 0
                  ? "33.3%"
                  : currentPage === 1
                  ? "66.6%"
                  : "100%",
            }}
          ></div> */}
        {/* </div> */}
        <div className="form-title">
          <h2>{formTitle[currentPage]}</h2>
        </div>
        <div className="form-body">{getPage()}</div>
        <div></div>
        <div className="form-fotter">
          <Button
            className="btn"
            text="prev"
            disabled={currentPage === 0 ? "disabled" : null}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          <Button
            className="btn"
            text="next"
            disabled={currentPage === 2 ? "disabled" : null}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
          {/*   <button
            disabled={currentPage === 0 ? "disabled" : null}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            prev
          </button>
          <button
            disabled={currentPage === 2 ? "disabled" : null}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            next
          </button> */}
        </div>
        {/* <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>

            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input type="text" name="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form> */}
        <button />
      </div>
    </>
  );
};

export default Info;
