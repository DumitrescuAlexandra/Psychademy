import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Homework.module.css";
import { storage } from "../../../Firebase";

function Homework(props) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {};

  console.log("file:", file);
  return (
    <div className={classes.homeworkPage}>
      <div className={classes.assignmentsTitle}>
        <p>My Assignments</p>
      </div>
      <div className={classes.assignmentType}>
        <NavLink
          key={1}
          className={classes.homework_inactive}
          to="/Assignments/homework"
          activeStyle={{ background: "#78ddb1", color: "#074343" }}
        >
          Homework
        </NavLink>
        <NavLink
          key={2}
          className={classes.homework_inactive}
          to="/Assignments/my-uploads"
          activeStyle={{ background: "#78ddb1", color: "#074343" }}
        >
          My uploads
        </NavLink>
      </div>
      <div className={classes.homeworkFiles}>{props.children}</div>
      <input type="file" onChange={handleChange} />
      <div className={classes.uploadBtn} onClick={handleUpload}>
        Upload
      </div>
    </div>
  );
}

export default Homework;
