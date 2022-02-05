import React from "react";
import classes from "./BackArrow.module.css";

import back from "../../Images/back.svg";

const BackArrow = (props) => {
  return (
    <div className={classes.backBtn} onClick={props.backHandler}>
      <img src={back} alt={"back"}></img>
      <p>Back</p>
    </div>
  );
};

export default BackArrow;
