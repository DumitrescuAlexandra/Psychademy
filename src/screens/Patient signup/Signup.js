import React, { useRef, useState } from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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
        <div className={classes.signupAction} onClick={submitHandler}>
          {
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
          }
          {
            <Link to="/UserPage" className={classes.signupButton}>
              {" "}
              Log In{" "}
            </Link>
          }
        </div>
      </form>
    </div>
  );
}

export default Signup;
