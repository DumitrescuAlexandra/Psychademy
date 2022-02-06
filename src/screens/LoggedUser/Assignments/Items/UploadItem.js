import React, { Fragment } from "react";
import classes from "./UploadItem.module.css";
import { Link } from "react-router-dom";

import journal from "../../../../Images/journal.svg";
import download from "../../../../Images/download.svg";

function UploadItem(props) {
  const trimmedFileName =
    props.name.length > 12 ? props.name.slice(0, 17) + "..." : props.name;

  return (
    <Fragment>
      <li className={classes.uploadedItem}>
        <div className={classes.uploadedIcon}>
          <img src={journal} alt=""></img>
        </div>

        <div className={classes.uploadedName}>
          <p>{trimmedFileName}</p>
        </div>

        <Link
          to={`/${props.url}`}
          className={classes.downloadBtn}
          onClick={props.onDownload}
        >
          <img src={download} alt=""></img>
        </Link>
      </li>
    </Fragment>
  );
}

export default UploadItem;
