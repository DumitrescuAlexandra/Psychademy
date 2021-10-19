import React, { Fragment } from "react";
import classes from "./AccountSettings.module.css";
import BackArrow from "../../../UI/Buttons/BackArrow";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.accountSettingsPage}>
        <p className={classes.title}> Account Settings </p>
        <div className={classes.settings}>
          <div className={classes.setting}>
            <Link to="/UserPage/PasswordChange">Change my password</Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/UserPage/ConfidentialityPolicy">
              Confidentiality Policy
            </Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/UserPage/DeleteAccount">Delete my account</Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountSettings;
