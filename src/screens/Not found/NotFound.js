import React from "react";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const backHandler = () => {
    console.log("redirection!!!");
  };

  return (
    <div className={classes.notFound}>
      <h3>404 - Page not found.</h3>
      <button className={classes.btn_back} onClick={backHandler}>
        Back
      </button>
    </div>
  );
};

export default NotFound;
