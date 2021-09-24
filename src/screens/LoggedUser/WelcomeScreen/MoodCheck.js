import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./MoodCheck.module.css";

function MoodCheck() {
  const history = useHistory();
  const [modal, setModal] = useState(true);

  const moodHandler = (event) => {
    event.preventDefault();
    history.push("/PatientLogin/UserPage");
    setModal(false);
  };

  const toggleMood = () => {
    return "";
  };

  const closeModal = (event) => {
    event.preventDefault();
    history.push("/PatientLogin/UserPage");
    setModal(false);
    return "";
  };

  const skipHandler = (event) => {
    event.preventDefault();
    history.push("/PatientLogin/UserPage");
    setModal(false);
  };

  return (
    <div className={modal ? classes.modalOn : classes.modalOff}>
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
          <Link
            className={classes.skipBtn}
            onClick={skipHandler}
            to="/PatientLogin/UserPage"
          >
            <p>Skip for now</p>
            <img src={"/Images/back.svg"} alt={"back"}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MoodCheck;
