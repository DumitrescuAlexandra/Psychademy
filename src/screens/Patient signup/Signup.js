import React, { Fragment, useRef, useState } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import BackArrow from "../../UI/Buttons/BackArrow";

function Signup() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();

    if (passwordInputRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setIsLoading(true);
      await signup(emailInputRef.current.value, passwordInputRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setIsLoading(false);
  }

  return (
    <Fragment>
      <BackArrow />
      <div className={classes.signupPage}>
        <header>
          <h2>Create an account</h2>
          <h4>Please enter an e-mail address and password</h4>
        </header>
        <div className={classes.signup}>
          {error && <div>{alert(error)}</div>}
          <form>
            <div className={classes.signupControl}>
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
            <div className={classes.signupControl}>
              <input
                name="password"
                type="password"
                id="password"
                ref={passwordInputRef}
                required
              ></input>
              <label htmlFor="password" className={classes.labelName}>
                <span className={classes.passwordContent}> Password </span>{" "}
              </label>
            </div>
            <div className={classes.signupControl}>
              <input
                name="passwordConfirm"
                type="password"
                id="passwordConfirm"
                ref={passwordConfirmRef}
                required
              ></input>
              <label htmlFor="passwordConfirm" className={classes.labelName}>
                <span className={classes.passwordContent}>
                  {" "}
                  Password Confirmation
                </span>{" "}
              </label>
            </div>
            <div className={classes.signupAction}>
              <div className={classes.loading}>
                {!isLoading && (
                  <p
                    className={classes.loading}
                    style={{
                      color: "#074343",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Loading ...
                  </p>
                )}
              </div>
              <div className={classes.signupAct} onClick={submitHandler}>
                <Link to="/UserPage" className={classes.signupButton}>
                  {" "}
                  Create account{" "}
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
