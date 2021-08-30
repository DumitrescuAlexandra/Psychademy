import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes.therapistPage}>
      <div className={classes.therapist}>
        <div className={classes.therapistCard}>
          <img src={"/Images/therapist.jpg"} alt={"profile"}></img>
          <div className={classes.vl}></div>
          <p className={classes.therapistName}>
            {" "}
            Ciprian Pertea{" "}
            <span className={classes.profession}>Psychotherapist</span>
          </p>
        </div>
        <div className={classes.aboutMe}>
          <p>
            {" "}
            Educational <span>background</span>
          </p>
        </div>
        <div className={classes.backgroundEd}>
          <div className={classes.edField}></div>
          <div className={classes.edField}>
            <img src={"/Images/masters.svg"} alt={"master"}></img>
            <p> Master's degree</p>
          </div>
          <div className={classes.edField}>
            <img src={"/Images/bachelors.svg"} alt={"bachelors"}></img>
            <p> Bachelor's degree</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
