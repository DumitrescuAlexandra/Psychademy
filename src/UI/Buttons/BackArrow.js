import React from "react";
import classes from "./BackArrow.module.css";
import { useHistory } from "react-router";

const BackArrow = () => {
  const history = useHistory();

  const backHandler = () => {
    // history.push("/welcome");
    history.goBack();
  };

  return (
    <div className={classes.backBtn} onClick={backHandler}>
      <img src={"/Images/back.svg"} alt={"back"}></img>
      <p>Back to Home</p>
    </div>
  );
};

export default BackArrow;
