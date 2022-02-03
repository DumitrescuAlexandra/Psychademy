import React, { Fragment, useRef, useState } from "react";
import classes from "./ChangePassword.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

function ChangePassword() {
  const history = useHistory();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, updateEmail, updatePassword } = useAuth();

  const emailInputRef = useRef();
  const newPasswordRef = useRef();
  const newPasswordConfirmRef = useRef();

  function updateHandler(e) {
    e.preventDefault();

    if (newPasswordRef.current.value !== newPasswordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    const promises = [];
    setIsLoading(true);
    setError("");

    if (emailInputRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailInputRef.current.value));
    }

    if (newPasswordRef.current.value) {
      promises.push(updatePassword(newPasswordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/SuccessfullyChanged");
      })
      .catch(() => {
        setError("Failed to update data!");
      })
      .finally(() => {
        setIsLoading(false);
        setError("");
      });
  }
  const backHandler = () => {
    history.push("/Account");
  };
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.changePasswordPage}>
        {error && alert(error)}
        <p className={classes.passwordTitle}> New Password / E-mail </p>
        <p className={classes.passwordSubTitle}>
          {" "}
          Please enter the required information to change your password and/or
          e-mail address
        </p>

        <form>
          {" "}
          <div className={classes.passwordFormCtrl}>
            <input
              type="email"
              id="newEmail"
              className={classes.inputField}
              ref={emailInputRef}
            ></input>
            <label htmlFor="newEmail" className={classes.labelName}>
              <span className={classes.pwContent}>
                {" "}
                Enter new e-mail address
              </span>{" "}
            </label>
          </div>
          <div className={classes.passwordFormCtrl}>
            <input
              type="password"
              id="enterNew"
              className={classes.inputField}
              ref={newPasswordRef}
            ></input>
            <label htmlFor="enterNew" className={classes.labelName}>
              <span className={classes.pwContent}> Enter new password</span>{" "}
            </label>
          </div>
          <div className={classes.passwordFormCtrl}>
            <input
              type="password"
              id="reEnterNew"
              className={classes.inputField}
              ref={newPasswordConfirmRef}
            ></input>
            <label htmlFor="reEnterNew" className={classes.labelName}>
              <span className={classes.pwContent}> Re-enter new password</span>{" "}
            </label>
          </div>
        </form>
        <div className={classes.passwordFormAct}>
          {!isLoading ? (
            <div className={classes.resetBtn} onClick={updateHandler}>
              {" "}
              Update info
            </div>
          ) : (
            <div className={classes.resetBtn}> Please wait...</div>
          )}
          <div
            className={classes.cancelBtn}
            onClick={() => history.push("/Account")}
          >
            Cancel
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ChangePassword;
