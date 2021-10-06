import React from "react";
import classes from "./NotFound.module.css";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const backHandler = () => {
    history.push("/welcome");
  };

  return (
    <div className={classes.notFound}>
      <h3>404 - Page not found.</h3>
      <button className={classes.btn_back} onClick={backHandler}>
        Home
      </button>
    </div>
  );
};

export default NotFound;
