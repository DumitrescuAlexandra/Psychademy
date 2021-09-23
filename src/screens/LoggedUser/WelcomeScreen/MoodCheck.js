import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import classes from "./MoodCheck.module.css";

function MoodCheck() {
  const history = useHistory();

  const moodHandler = (event) => {
    event.preventDefault();
  };

  const toggleMood = () => {
    return "";
  };

  const closeModal = () => {
    return "";
  };

  const skipHandler = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <Fragment>
      <div className={classes.background}></div>
      <div className={classes.moodModal}>
        <img
          src="/Images/close.svg"
          alt=""
          onClick={closeModal}
          className={classes.close}
        ></img>
        <p className={classes.moodTitle}> Welcome! </p>
        <p className={classes.moodText}> How do you feel today? </p>
        <div className={classes.moods}>
          <img src="/Images/horrible.svg" alt="" onClick={toggleMood}></img>
          <img src="/Images/sad.svg" alt="" onClick={toggleMood}></img>
          <img src="/Images/meh.svg" alt="" onClick={toggleMood}></img>
          <img src="/Images/happy.svg" alt="" onClick={toggleMood}></img>
          <img src="/Images/wonderful.svg" alt="" onClick={toggleMood}></img>
        </div>
        <div className={classes.modalControls}>
          <button onClick={moodHandler} className={classes.submitBtn}>
            {" "}
            Submit{" "}
          </button>
          <button className={classes.skipBtn} onClick={skipHandler}>
            {" "}
            Skip for now{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default MoodCheck;
