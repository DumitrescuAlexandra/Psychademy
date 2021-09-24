import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import MoodCheck from "../WelcomeScreen/MoodCheck";
import classes from "./UserPage.module.css";

function UserPage() {
  const [firstLogToday, setFirstLogToday] = useState(true);

  return (
    <Fragment>
      <div className={classes.userPage}>
        <p className={classes.greeting}> Welcome</p>
      </div>
      <div className={classes.userLinks}>
        <div className={classes.userLink}>
          <div className={classes.userIcon}>
            <img src={"/Images/user.svg"} alt={""}></img>
          </div>
          <Link to="/PatientLogin/UserPage/Account" className={classes.userNav}>
            Account{" "}
          </Link>
          <div className={classes.userArrow}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.userLink}>
          <div className={classes.userIcon}>
            <img src={"/Images/journal.svg"} alt={""}></img>
          </div>
          <Link to="/PatientLogin/UserPage/Journal" className={classes.userNav}>
            Journal{" "}
          </Link>
          <div className={classes.userArrow}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.userLink}>
          <div className={classes.userIcon}>
            <img src={"/Images/assignments.svg"} alt={""}></img>
          </div>
          <Link
            to="/PatientLogin/UserPage/Assignments"
            className={classes.userNav}
          >
            Assignments{" "}
          </Link>
          <div className={classes.userArrow}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.userLink}>
          <div className={classes.userIcon}>
            <img src={"/Images/evolution.svg"} alt={""}></img>
          </div>
          <Link
            to="/PatientLogin/UserPage/Evolution"
            className={classes.userNav}
          >
            EvolutionGraph{" "}
          </Link>
          <div className={classes.userArrow}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>
        <img src={"/Images/logout.svg"} alt={"logout"}></img>
      </div>

      {firstLogToday && <MoodCheck />}
    </Fragment>
  );
}

export default UserPage;
