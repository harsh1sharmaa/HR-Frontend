import React from "react";

const Holidays = () => {
  const handleAddHolidays = (e) => {
    e.preventDefault();
    console.log("holiday added by admin");
    //call post API to add holiday
  };
  return (
    <div className="holidays">
      <div className="holidays-list">
        <ul>
          <li>Holidays 1</li>
          <li>Holidays 2</li>
          <li>Holidays 3</li>
          <li>Holidays 4</li>
          <li>eter 5</li>
        </ul>
      </div>
      <div className="holiday-add">
        <div>
          <label>Holidays date</label>
          <input type="text" name="holiday" />
        </div>
        <button onClick={handleAddHolidays}> add Holidays </button>
      </div>
    </div>
  );
};

export default Holidays;
