import React, { Fragment } from "react";

import classes from "./HomeworkItem.module.css";

import file from "../../../../Images/fileImg.svg";
import download from "../../../../Images/download.svg";

function HomeworkItem(props) {
  const displayedName =
    props.name.length > 15 ? props.name.slice(0, 15) + "..." : props.name;

  return (
    <Fragment>
      <li className={classes.homeworkItem}>
        <div className={classes.fileImg}>
          <img src={file} alt=""></img>
        </div>

        <div className={classes.homeworkName}>
          <p>{displayedName}</p>
        </div>

        <p className={classes.downloadHomeworkBtn} onClick={props.onDownload}>
          <img src={download} alt="" height="24px"></img>
        </p>
      </li>
    </Fragment>
  );
}

export default HomeworkItem;
