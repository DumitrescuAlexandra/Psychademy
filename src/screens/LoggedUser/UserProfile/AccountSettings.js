import React, { Fragment } from "react";
import classes from "./AccountSettings.module.css";
import BackArrow from "../../../UI/Buttons/BackArrow";
import { Link, useHistory } from "react-router-dom";

const AccountSettings = () => {
  const history = useHistory();
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.accountSettingsPage}>
        <p className={classes.title}> Account Settings </p>
        <div className={classes.settings}>
          <div className={classes.setting}>
            <Link to="/PasswordChange">Change my password</Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/ConfidentialityPolicy">Confidentiality Policy</Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
          <div className={classes.setting}>
            <Link to="/DeleteAccount">Delete my account</Link>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
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
