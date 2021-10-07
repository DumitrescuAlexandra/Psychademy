import React, { useState } from "react";
import Modal from "react-modal";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import classes from "./DeleteAccount.module.css";

function DeleteAccount() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={classes.deletePage}>
      <BackArrow />
      <p className={classes.deleteTitle}> Delete Account </p>
      <p className={classes.deleteSubTitle}>
        {" "}
        Please complete the following steps in order to change you password{" "}
      </p>
      <form>
        <div className={classes.deleteControl}>
          <input type="email" id="email" autoComplete="off" required></input>
          <label htmlFor="email" className={classes.labelName}>
            <span className={classes.emailContent}>
              {" "}
              Enter your email Address{" "}
            </span>{" "}
          </label>
        </div>
        <div className={classes.deleteControl}>
          <input name="password" type="password" id="password" required></input>
          <label htmlFor="password" className={classes.labelName}>
            <span className={classes.passwordContent}>
              {" "}
              Enter your password{" "}
            </span>{" "}
          </label>
        </div>
        <div className={classes.deleteAction}>
          <div className={classes.deleteBtn}> Delete my account </div>
        </div>
      </form>

      {showModal && (
        <Modal
          isOpen={true}
          className={classes.deleteModalBck}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(28, 28, 28, 0.9)",
            },
          }}
        >
          <div className={classes.deleteModal}>
            <img src="/Images/close.svg" alt=""></img>
            <p className={classes.modalTitle}> Delete your account</p>
            <p className={classes.modalText}>
              {" "}
              Please note that this action is permanent and all data associated
              with your account will be erased as well.
            </p>{" "}
            <p className={classes.modalText}>
              {" "}
              A prior discussion with your therapist is advised.{" "}
            </p>
            <div
              className={classes.modalBtn}
              onClick={() => setShowModal(false)}
            >
              {" "}
              I understand{" "}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default DeleteAccount;
