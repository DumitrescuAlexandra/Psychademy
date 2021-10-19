import React, { Fragment } from "react";
import classes from "./ChangePassword.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";

function ChangePassword() {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.changePasswordPage}>
        <p className={classes.passwordTitle}> Change Password </p>
        <p className={classes.passwordSubTitle}>
          {" "}
          Please complete the following steps in order to change your password
        </p>
        <form>
          {" "}
          <div className={classes.passwordFormCtrl}>
            <input
              type="text"
              id="currPw"
              required
              className={classes.inputField}
            ></input>
            <label htmlFor="currPw" className={classes.labelName}>
              <span className={classes.pwContent}> Enter current password</span>{" "}
            </label>
          </div>
          <div className={classes.passwordFormCtrl}>
            <input
              type="text"
              id="enterNew"
              required
              className={classes.inputField}
            ></input>
            <label htmlFor="enterNew" className={classes.labelName}>
              <span className={classes.pwContent}> Enter new password</span>{" "}
            </label>
          </div>
          <div className={classes.passwordFormCtrl}>
            <input
              type="text"
              id="reEnterNew"
              required
              className={classes.inputField}
            ></input>
            <label htmlFor="reEnterNew" className={classes.labelName}>
              <span className={classes.pwContent}> Re-enter new password</span>{" "}
            </label>
          </div>
        </form>
        <div className={classes.passwordFormAct}>
          <div className={classes.resetBtn}> Reset my password </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ChangePassword;
