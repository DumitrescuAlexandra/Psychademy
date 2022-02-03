import React, { Fragment, useRef, useState } from "react";
import BackArrow from "../../UI/Buttons/BackArrow";
import classes from "./PatientLogin.module.css";
import { useAuth } from "../../contexts/AuthContext";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PatientLogin = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { login, getCurrentUserId } = useAuth();
  const userUID = getCurrentUserId();

  async function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(emailInputRef.current.value, passwordInputRef.current.value);
      setError("");
    } catch {
      setError("Failed to sign in");
    } finally {
      localStorage.setItem("isAuth", userUID);
      console.log(userUID);
      setIsLoading(false);
    }
  }

  const history = useHistory();
  const backHandler = () => {
    history.push("/welcome");
  };
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.loginPage}>
        <header>
          <h4>Authentication</h4>
          <h5>Please enter your e-mail address and password</h5>
        </header>

        <div className={classes.auth}>
          {error && <div>{alert(error)}</div>}

          <form>
            <div className={classes.authControl}>
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
            <div className={classes.authControl}>
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
            <div className={classes.authAction} onClick={submitHandler}>
              {isLoading && (
                <p
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
              {!isLoading && (
                <Link to="/UserPage" className={classes.authButton}>
                  {" "}
                  Log In{" "}
                </Link>
              )}
            </div>
          </form>
        </div>
        <div className={classes.loginHint}>
          <p>
            Don't have an account?{" "}
            <Link to="/PatientSignup" className={classes.signupLogin}>
              Sign up for free!
            </Link>
          </p>
        </div>
        <div className={classes.loginHint}>
          <Link to="/ForgotPassword" className={classes.signupLogin}>
            Forgot your password?
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PatientLogin;
