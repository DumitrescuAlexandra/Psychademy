import React from "react";
import { Link, Route } from "react-router-dom";
import classes from "./MyAssignments.module.css";
import HomeworkItem from "./HomeworkItem";
import Homework from "./Homework";
import MyUploads from "./MyUploads";

function MyAssignments() {
  return (
    <div className={classes.assignmentsPage}>
      <div className={classes.title}>
        <p>My Assignments</p>
      </div>
      <div className={classes.btns}>
        <div className={classes.homework}>
          <Link to="/My-Asignments">Homework</Link>/
        </div>
        <div className={classes.uploads}>
          <Link to="/My-Uploads">Homework</Link>/
        </div>
      </div>
      <HomeworkItem />
      <Route path="/My-Asignments">
        <Homework />
      </Route>
      <Route path="/My-Uploads">
        <MyUploads />
      </Route>
    </div>
  );
}

export default MyAssignments;
