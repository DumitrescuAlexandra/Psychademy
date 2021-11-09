import React from "react";
import { Link } from "react-router-dom";
import classes from "./DetailedEntry.module.css";

function DetailedEntry(props) {
  return (
    <div className={classes.entry}>
      <div className={classes.banner}>
        <div className={classes.title}>
          <p>{props.title}</p>
        </div>
        <div className={classes.date}>
          {" "}
          <p>{props.date}</p>
        </div>
        <div className={classes.message}>
          <p>{props.message}</p>
        </div>
      </div>
      <Link to="/Journal"> Back </Link>
    </div>
  );
}

export default DetailedEntry;
