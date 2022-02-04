import React, { useState, Fragment, useRef } from "react";
import Modal from "react-modal";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import classes from "./DeleteAccount.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import OperationFailed from "../../../Unsuccessful screen/OperationFailed";

function DeleteAccount() {
  const [showModal, setShowModal] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { deleteAccount, currentUser } = useAuth();

  async function deleteHandler(e) {
    e.preventDefault();

    if (
      emailInputRef.current.value !== currentUser.email ||
      passwordInputRef.current.value !== currentUser.password
    ) {
      return setError("Incorrect credentials! Account deletion failed!");
    }

    try {
      setError("");
      setIsLoading(true);
      history.push("/SuccessfullyDeleted");
      await deleteAccount();
    } catch {
      setError("Failed to delete account!");
    }
    setIsLoading(false);
  }

  const backHandler = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      {error && <OperationFailed failMessage={error} path="/Account" />}
      <div className={classes.deletePage}>
        <p className={classes.deleteTitle}> Delete Account </p>
        <p className={classes.deleteSubTitle}>
          {" "}
          Please complete the following steps in order to delete your account{" "}
        </p>
        <form>
          <div className={classes.deleteControl}>
            <input
              type="email"
              id="email"
              autoComplete="off"
              ref={emailInputRef}
              required
            ></input>
            <label htmlFor="email" className={classes.labelName}>
              <span className={classes.emailContent}>
                {" "}
                Enter your email Address{" "}
              </span>{" "}
            </label>
          </div>
          <div className={classes.deleteControl}>
            <input
              name="password"
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            ></input>
            <label htmlFor="password" className={classes.labelName}>
              <span className={classes.passwordContent}>
                {" "}
                Enter your password{" "}
              </span>{" "}
            </label>
          </div>
          <div className={classes.deleteAction}>
            <div
              className={classes.cancelBtn}
              onClick={() => history.replace("/Account")}
            >
              {" "}
              Cancel{" "}
            </div>
            {!isLoading ? (
              <div className={classes.deleteBtn} onClick={deleteHandler}>
                {" "}
                Delete{" "}
              </div>
            ) : (
              <div className={classes.deleteBtn}> Please wait... </div>
            )}{" "}
          </div>
        </form>

        {showModal && (
          <Modal
            isOpen={true}
            className={classes.deleteModalBck}
            ariaHideApp={false}
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
              <img
                src="/Images/close.svg"
                alt=""
                onClick={() => history.push("/Account")}
              ></img>
              <p className={classes.modalTitle}> Delete your account</p>
              <p className={classes.modalText}>
                {" "}
                Please note that this action is permanent and all data
                associated with your account will be erased as well.
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
    </Fragment>
  );
}

export default DeleteAccount;
