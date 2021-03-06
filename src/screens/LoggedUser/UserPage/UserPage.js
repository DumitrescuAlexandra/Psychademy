import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./UserPage.module.css";
import { useAuth } from "../../../contexts/AuthContext";

import user from "../../../Images/user.svg";
import arrow from "../../../Images/arrow.svg";
import assignments from "../../../Images/assignments.svg";
import journal from "../../../Images/journal-icon.svg";
import evolution from "../../../Images/evolution.svg";
import logoutIcon from "../../../Images/logout.svg";

function UserPage() {
  const history = useHistory();

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const logoutHandler = async () => {
    setError("");

    try {
      await logout();
      localStorage.clear();
      history.replace("/welcome");
    } catch {
      setError("Failed to logout");
    }
  };

  return (
    <Fragment>
      {error && <div>{alert(error)}</div>}
      <div className={classes.userPage}>
        <p> Welcome</p>

        <div className={classes.userLinks}>
          <div className={classes.userLink}>
            <div className={classes.userIcon}>
              <img src={user} alt={""}></img>
            </div>
            <Link to="/Account" className={classes.userNav}>
              Account{" "}
            </Link>
            <div className={classes.userArrow}>
              <img src={arrow} alt={"arrow"}></img>
            </div>
          </div>

          <div className={classes.userLink}>
            <div className={classes.userIcon}>
              <img src={journal} alt={""}></img>
            </div>
            <Link to="/Journal" className={classes.userNav}>
              Journal{" "}
            </Link>
            <div className={classes.userArrow}>
              <img src={arrow} alt={"arrow"}></img>
            </div>
          </div>

          <div className={classes.userLink}>
            <div className={classes.userIcon}>
              <img src={assignments} alt={""}></img>
            </div>
            <Link to="/Assignments" className={classes.userNav}>
              Assignments{" "}
            </Link>
            <div className={classes.userArrow}>
              <img src={arrow} alt={"arrow"}></img>
            </div>
          </div>

          <div className={classes.userLink}>
            <div className={classes.userIcon}>
              <img src={evolution} alt={""}></img>
            </div>
            <Link to="/Evolution" className={classes.userNav}>
              Evolution Graph{" "}
            </Link>
            <div className={classes.userArrow}>
              <img src={arrow} alt={"arrow"}></img>
            </div>
          </div>
        </div>
        <img
          src={logoutIcon}
          alt={"logout"}
          className={classes.logout}
          onClick={logoutHandler}
        ></img>
        <div className={classes.accountName}>
          <p>
            Logged in as: <span> {currentUser.email}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default UserPage;
