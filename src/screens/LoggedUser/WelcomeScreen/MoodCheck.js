import React from "react";
import Modal from "react-modal";
import { Link, useHistory } from "react-router-dom";
import classes from "./MoodCheck.module.css";

function MoodCheck() {
  const history = useHistory();

  const moodHandler = (event) => {
    event.preventDefault();
    history.push("/UserPage");
  };

  const toggleMood = () => {
    return "";
  };

  return (
    <div className={classes.moodCheckPage}>
      <Modal
        isOpen={true}
        className={classes.moodModalBck}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(28, 28, 28, 0.9)",
          },
        }}
      >
        <img
          src="/Images/close.svg"
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.replace("/UserPage")}
          className={classes.closeImg}
        ></img>
        <div className={classes.moodContainer}>
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
            <Link className={classes.skipBtn} to="/PatientLogin/UserPage">
              <p>Skip for now</p>
              <img src={"/Images/back.svg"} alt={"back"}></img>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MoodCheck;
