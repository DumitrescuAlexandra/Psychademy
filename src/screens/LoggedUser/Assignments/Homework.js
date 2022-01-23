import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Homework.module.css";
import { storage } from "../../../Firebase";

function Homework(props) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`files/uploads/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("files/uploads")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    setFileName("Choose...");
  };

  const chooseBtnName =
    fileName.length > 12 ? fileName.slice(0, 12) + "..." : fileName;

  console.log("file:", file);
  return (
    <div className={classes.homeworkPage}>
      <div className={classes.homeworkTitle}>
        <p>My Assignments</p>
      </div>
      <div className={classes.homeworkType}>
        <NavLink
          key={1}
          className={classes.homework_inactive}
          to="/Assignments/homework"
          activeStyle={{ background: "#78ddb1", color: "#074343" }}
        >
          My homework
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
      <div>
        <input
          type="file"
          id="files"
          onChange={handleChange}
          className={classes.inputField}
        />
      </div>
      <div className={classes.actionBtns}>
        <label htmlFor="files" className={classes.chooseBtn}>
          {chooseBtnName}
        </label>
        <div className={classes.uploadBtn} onClick={handleUpload}>
          Upload
        </div>
      </div>
    </div>
  );
}

export default Homework;
