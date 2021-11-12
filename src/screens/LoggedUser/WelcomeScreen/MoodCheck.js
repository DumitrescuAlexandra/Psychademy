import React from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./MoodCheck.module.css";
import Mood from "./Mood";

function MoodCheck(props) {
  const history = useHistory();
  let registeredMoods = [];

  const moodHandler = (event) => {
    event.preventDefault();

    registeredMoods.push(props.moods.value);
    console.log(registeredMoods);
    history.push("/UserPage");
  };

  const closeModal = (event) => {
    event.preventDefault();
    history.push("/UserPage");
    console.log("EXIT modal");
    return "";
  };

  const skipHandler = (event) => {
    event.preventDefault();
    history.push("/UserPage");
  };

  // CLOSE the modal INLINE ex: onclick={() => setModal(false)}

  return (
    <div>
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
          <Mood />
        </div>
        <div className={classes.modalControls}>
          <button
            onClick={moodHandler}
            className={classes.submitBtn}
            moods={props.moods}
          >
            {" "}
            Submit{" "}
          </button>
          <Link
            className={classes.skipBtn}
            onClick={skipHandler}
            onQuit={props.onQuitHandler}
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
