import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./AssignmentsPage.module.css";

function AssignmentsPage() {
  return (
    <div>
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
    </div>
  );
}

export default AssignmentsPage;
