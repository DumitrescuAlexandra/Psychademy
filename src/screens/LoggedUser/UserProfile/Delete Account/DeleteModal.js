import React from "react";
import classes from "./DeleteAccount.module.css";

function DeleteModal() {
  return (
    <div className={classes.deleteModalBck}>
      <div className={classes.deleteModal}>
        <img src="/Images/close.svg" alt=""></img>
        <p className={classes.modalTitle}> Delete your account</p>
        <p className={classes.modalText}>
          {" "}
          Please note that this action is permanent and all data associated with
          your account will be erased as well. <br />A prior discussion with
          your therapist is advised.{" "}
        </p>
        <div className={classes.modalBtn}> I understand </div>
      </div>
    </div>
  );
}

export default DeleteModal;
