import React, { Fragment } from "react";
import BackArrow from "../../UI/Buttons/BackArrow";
import AuthForm from "./AuthForm";
import classes from "./PatientLogin.module.css";
import { Link } from "react-router-dom";

// USE STATE to check for auth - if so, render <MoodCheck>

const PatientLogin = () => {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.loginPage}>
        <header>
          <h4>Authentication</h4>
          <h5>Please enter your e-mail address and password</h5>
        </header>

        <AuthForm />
        <div className={classes.loginHint}>
          <p>
            Don't have an account?{" "}
            <Link to="/PatientSignup" className={classes.signupLogin}>
              Sign up for free!
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default PatientLogin;
