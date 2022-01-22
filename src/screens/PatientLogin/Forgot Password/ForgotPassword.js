import React, { Fragment, useRef, useState } from "react";
import classes from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import BackArrow from "../../../UI/Buttons/BackArrow";
import LoadingSpinner from "../../../UI/LoadingSpinner";

function ForgotPassword() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const emailInputRef = useRef();

  const { resetPassword } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setIsLoading(true);
      await resetPassword(emailInputRef.current.value);
      setMessage("Check your e-mail inbox for further instructions!");
    } catch {
      setError("Failed to reset password");
    }
    setIsLoading(false);
  }

  return (
    <Fragment>
      <BackArrow />
      <div className={classes.forgotPage}>
        <header>
          <h4>Password reset</h4>
          <h5>Please enter your e-mail address</h5>
        </header>
        <div className={classes.loading}>{isLoading && <LoadingSpinner />}</div>

        <div className={classes.forgot}>
          {error && <div>{alert(error)}</div>}
          {message && <div>{alert(message)}</div>}

          <form>
            <div className={classes.forgotControl}>
              <input
                type="email"
                id="email"
                autoComplete="off"
                ref={emailInputRef}
                required
              ></input>
              <label htmlFor="email" className={classes.labelName}>
                <span className={classes.emailContent}> E-mail Address </span>{" "}
              </label>
            </div>

            <div className={classes.forgotAction}>
              <div className={classes.forgotAct} onClick={submitHandler}>
                {!isLoading ? (
                  <div className={classes.forgotButton}> Reset Password </div>
                ) : (
                  <div className={classes.forgotButton}> Please wait... </div>
                )}
              </div>
            </div>

            <div className={classes.loginInvitation}>
              <p>
                Already know your password?{" "}
                <Link to="/PatientLogin" className={classes.signupLogin}>
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* <div className={classes.loading}>{isLoading && <LoadingSpinner />}</div> */}
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
