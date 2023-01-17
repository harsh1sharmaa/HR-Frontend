// import ProgressBar from 'react-bootstrap/ProgressBar';
import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

function BasicExample({now}) {
  return  <ProgressBar completed={now} maxCompleted={100} />;
}

export default BasicExample;