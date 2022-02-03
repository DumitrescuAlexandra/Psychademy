import React from "react";
import classes from "./PatientInfo.module.css";

function PatientInfo(props) {
  return (
    <div className={classes.patientInfoContainer}>
      <div className={classes.patientInfo}>
        <div className={classes.infoFullName}>
          <p> Full name:</p> <span>{props.fullName || "blablu"}</span>
        </div>
        <div className={classes.infoBirthdate}>
          <p> Birthdate:</p> <span>{props.birthDate || "blablu"}</span>
        </div>
        <div className={classes.infoPhone}>
          <p> Phone Number:</p> <span>{props.phone || "blablu"}</span>
        </div>
      </div>
      <div className={classes.personOfContact}>
        <div className={classes.aboutPerson}>
          <p>Emergency contact</p>
        </div>
        <div className={classes.infoPersonName}>
          <p> Person's full name: </p>{" "}
          <span>{props.contactName || "blablu"} </span>
        </div>
        <div className={classes.infoPersRelationship}>
          <p> Your relationship: </p>{" "}
          <span>{props.contactRelationship || "blablu"}</span>
        </div>
        <div className={classes.infoPersPhone}>
          <p> Person's phone: </p> <span>{props.contactPhone || "blablu"}</span>
        </div>
      </div>
    </div>
  );
}

export default PatientInfo;
