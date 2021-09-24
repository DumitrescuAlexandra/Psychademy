import React, { useState, useRef } from "react";
import UserPage from "../LoggedUser/UserPage/UserPage";
import classes from "./AuthForm.module.css";

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("CLICK");

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // here goes some validation

    setIsLoading(true);

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCUSDW-Qits0orb2Mmv7-EC8EAsSpiUZZg",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;

              throw new Error(errorMessage);
            }
          });
        }
      })
      .then((data) => {
        console.log(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.message.includes("EMAIL")) {
          alert("Email address is invalid! Please check and try again!");
        } else if (err.message.includes("PASSWORD")) {
          alert("Incorrect password! Please try again");
        } else alert(err.message);
      });
  };

  return (
    <div className={classes.auth}>
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
            <button className={classes.authButton}> Log In </button>
          )}
        </div>
      </form>
      {isLoggedIn && <UserPage />}
    </div>
  );
}

export default AuthForm;
