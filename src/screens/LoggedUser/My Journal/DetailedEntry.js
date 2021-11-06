import React from "react";
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
    </div>
  );
}

export default DetailedEntry;
