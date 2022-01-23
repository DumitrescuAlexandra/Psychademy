import React from "react";
import classes from "./UploadItem.module.css";
import { Link } from "react-router-dom";

function UploadItem(props) {
  return (
    <div>
      <li className={classes.uploadedItem}>
        <div className={classes.uploadedIcon}>
          <img src="/Images/journal.svg" alt=""></img>
        </div>
        <div className={classes.uploadedText}>
          <div className={classes.uploadedName}>
            <p>{props.name}</p>
          </div>
          <div className={classes.uploadedDate}>
            <p>{props.date}</p>
          </div>
        </div>

        <Link to={`/props.url`} className={classes.downloadBtn}>
          <img src="/Images/download.svg" alt=""></img>
        </Link>
      </li>
    </div>
  );
}

export default UploadItem;
