import React from "react";
import classes from "./BackArrow.module.css";

const BackArrow = (props) => {
  return (
    <div className={classes.backBtn} onClick={props.backHandler}>
      <img src={"/Images/back.svg"} alt={"back"}></img>
      <p>Back</p>
    </div>
  );
};

export default BackArrow;
