import React, { Fragment, useState } from "react";
import classes from "./AccountInfo.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import EditForm from "./EditForm";

function AccountInfo(props) {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.infoPage}>
        <div className={classes.infoTitle}>
          <p> Personal information</p>
        </div>
        <div className={classes.patientInfo}>
          <div className={classes.infoFullName}>
            {/* <p> Full name:</p> <span>{props.fullName}</span> */}
            <p> Full name:</p> <span>John Doe</span>
          </div>
          <div className={classes.infoBirthdate}>
            {/* <p> Birthdate:</p> <span>{props.birthdate}</span> */}
            <p> Birthdate:</p> <span>20.06.1991</span>
          </div>
          <div className={classes.infoPhone}>
            {/* <p> Phone Number:</p> <span>{props.phone}</span> */}
            <p> Phone Number:</p>
            <span> +40 749 315 227</span>
          </div>
        </div>
        <div className={classes.personOfContact}>
          <div className={classes.aboutPerson}>
            <p>Emergency contact</p>
          </div>
          <div className={classes.infoPersonName}>
            {/* <p> Person's full name: </p> <span>{props.personName}</span> */}
            <p> Person's full name: </p> <span>Johanna Doe</span>
          </div>
          <div className={classes.infoPersRelationship}>
            {/* <p> Your relationship: </p> <span>{props.personRelationship}</span> */}
            <p> Your relationship: </p> <span>Partner</span>
          </div>
          <div className={classes.infoPersPhone}>
            {/* <p> Person's phone Number: </p> <span>{props.phone}</span> */}
            <p> Phone Number: </p> <span>+40 749 315 226</span>
          </div>
        </div>
        <div
          className={classes.editBtn}
          onClick={() => {
            setModal(true);
          }}
        >
          <p>Edit my info</p>
        </div>
        {modal && <EditForm />}
      </div>
    </Fragment>
  );
}

export default AccountInfo;
