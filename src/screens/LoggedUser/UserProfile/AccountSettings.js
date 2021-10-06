import React from "react";
import classes from "./AccountSettings.module.css";
import BackArrow from "../../../UI/Buttons/BackArrow";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <div className={classes.accountSettingsPage}>
      <BackArrow />
      <p className={classes.title}> Account Settings </p>
      <div className={classes.settings}>
        <div className={classes.setting}>
          <Link to="/PatientLogin/UserPage/Account/PasswordChange">
            Change my password
          </Link>
          <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
        </div>
        <div className={classes.setting}>
          <Link to="/UserPage/ConfidentialityPolicy">
            Confidentiality Policy
          </Link>
          <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
        </div>
        <div className={classes.setting}>
          <Link to="/PatientLogin/UserPage/Account/PasswordChange">
            Delete my account
          </Link>
          <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
