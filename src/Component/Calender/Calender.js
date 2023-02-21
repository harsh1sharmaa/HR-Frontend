import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calender.css";
// import Calendar from 'react-calendar'
const Calender = () => {
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDaysNames = (n) => {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    var firstDay = new Date(y, m, n) + "";
    console.log(firstDay.slice(0, 3));
    return firstDay.slice(0, 3);
  };
  //   var date = new Date();
  //   var firstDay = new Date(date.getFullYear(), date.getMonth(), 2);

  const d = new Date();
  let month = d.getMonth();
  let year = d.getFullYear();
  let day = d.getDate();
  console.log(month, year, day);
  const days = 32 - new Date(year, month, 32).getDate();
  console.log(days);

  const numbers = Array.from({ length: days }, (_, i) => i + 1);

  const rows = [];
  for (let i = 0; i < numbers.length; i += 7) {
    rows.push(numbers.slice(i, i + 7));
  }

  const rowElements = rows.map((row, i) => (
    <div key={i} className="row">
      {row.map((number, i) => (
        <div key={number} className={"number "+ (getDaysNames(number))}>
          {number}
          <small className="day-name">{getDaysNames(number)}</small>
        </div>
      ))}
    </div>
  ));

  return <div className="number-grid">{rowElements}</div>;
};

export default Calender;
