import React, { Fragment } from "react";
import classes from "./AccountSettings.module.css";
import BackArrow from "../../../UI/Buttons/BackArrow";
import { Link, useHistory } from "react-router-dom";

import arrow from "../../../Images/arrow.svg";

const AccountSettings = () => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/UserPage");
  };

  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.accountSettingsPage}>
        <p className={classes.title}> Account Settings </p>
        <div className={classes.settings}>
          <div className={classes.setting}>
            <Link to="/AccountInfo">My Account</Link>
            <img src={arrow} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/PasswordChange">Change my password</Link>
            <img src={arrow} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/ConfidentialityPolicy">Confidentiality Policy</Link>
            <img src={arrow} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/DeleteAccount">Delete my account</Link>
            <img src={arrow} alt={"arrow"}></img>
          </div>
        </div>
        <div
          className={classes.backBtn}
          onClick={() => history.push("/UserPage")}
        >
          Back{" "}
        </div>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
