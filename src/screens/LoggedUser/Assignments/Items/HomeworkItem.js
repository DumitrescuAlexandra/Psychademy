import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./HomeworkItem.module.css";

function HomeworkItem(props) {
  const displayedName =
    props.name.length > 15 ? props.name.slice(0, 15) + "..." : props.name;

  return (
    <Fragment>
      <li className={classes.homeworkItem}>
        <div className={classes.fileImg}>
          <img src="/Images/fileImg.svg" alt=""></img>
        </div>

        <div className={classes.homeworkName}>
          <p>{displayedName}</p>
        </div>

        <Link
          to={`/${props.url}`}
          className={classes.downloadHomeworkBtn}
          onClick={props.onDownload}
        >
          <img src="/Images/download.svg" alt="" height="24px"></img>
        </Link>
      </li>
    </Fragment>
  );
}

export default HomeworkItem;
