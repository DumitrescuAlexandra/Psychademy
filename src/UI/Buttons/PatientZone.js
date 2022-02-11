import React from "react";
import classes from "./PatientZone.module.css";
import zone from "../../Images/patient-zone.svg";
import { Link } from "react-router-dom";

function PatientZone() {
  return (
    <div className={classes.zoneBtn}>
      <Link to="/UserPage">My zone</Link>
      <img src={zone} alt="" />
    </div>
  );
}

export default PatientZone;
