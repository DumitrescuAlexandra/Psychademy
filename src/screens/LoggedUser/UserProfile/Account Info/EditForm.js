import React, { Fragment, useState, useRef } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "../../../../UI/LoadingSpinner";
import classes from "./EditForm.module.css";
import { db } from "../../../../Firebase/index";
import { collection, addDoc } from "firebase/firestore";

function EditForm(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(true);

  const fullNameInputRef = useRef();
  const birthDateInputRef = useRef();
  const phoneInputRef = useRef();
  const contactNameInputRef = useRef();
  const contactRelationshipInputRef = useRef();
  const contactPhoneInputRef = useRef();

  const editHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    addDoc(collection(db, "accountDetails"), {
      fullName: fullNameInputRef.current.value,
      birthDate: birthDateInputRef.current.value,
      phone: phoneInputRef.current.value,
      contactName: contactNameInputRef.current.value,
      contactRelationship: contactRelationshipInputRef.current.value,
      contactPhone: contactPhoneInputRef.current.value,
    });
    history.push("/SuccessfullyUpdated");
    setLoading(false);
    setIsEditing(false);
  };

  return (
    <Fragment>
      <div className={classes.entryFormPage}>
        {isEditing && (
          <Modal
            className={classes.newEntryModalBck}
            isOpen={true}
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
            <img
              src="/Images/close.svg"
              alt=""
              height="28px"
              width="28px"
              onClick={props.onClose}
            ></img>
            <div className={classes.entryContainer}>
              <div className={classes.formTitle}>
                <p> Edit personal info</p>
              </div>

              <div className={classes.editForm}>
                <form className={classes.editForm}>
                  <div className={classes.loading}>
                    {loading && <LoadingSpinner />}
                  </div>

                  <div className={classes.entryControl}>
                    <label htmlFor="fullName" className={classes.labelName}>
                      <span className={classes.titleContent}>
                        {" "}
                        Enter your full name{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      ref={fullNameInputRef}
                      autoComplete="off"
                    />
                  </div>
                  <div className={classes.entryControl}>
                    <label htmlFor="birthDate" className={classes.labelName}>
                      <span className={classes.titleContent}>
                        {" "}
                        Enter your birthdate{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="birthDate"
                      ref={birthDateInputRef}
                      autoComplete="off"
                    />
                  </div>
                  <div className={classes.entryControl}>
                    <label htmlFor="phone" className={classes.labelName}>
                      <span className={classes.titleContent}>
                        {" "}
                        Enter your Phone number{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="phone"
                      ref={phoneInputRef}
                      autoComplete="off"
                    />
                  </div>

                  <div className={classes.formTitle}>
                    <p> Edit emergency contact</p>
                  </div>

                  <div className={classes.entryControl}>
                    <label htmlFor="contactName" className={classes.labelName}>
                      <span className={classes.titleContent}>
                        {" "}
                        Contact's full name{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      ref={contactNameInputRef}
                      autoComplete="off"
                    />
                  </div>
                  <div className={classes.entryControl}>
                    <label
                      htmlFor="contactRelationship"
                      className={classes.labelName}
                    >
                      <span className={classes.titleContent}>
                        {" "}
                        Your relationship{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="contactRelationship"
                      ref={contactRelationshipInputRef}
                      autoComplete="off"
                    />
                  </div>
                  <div className={classes.entryControl}>
                    <label htmlFor="contactPhone" className={classes.labelName}>
                      <span className={classes.titleContent}>
                        {" "}
                        Phone number{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="text"
                      id="contactPhone"
                      ref={contactPhoneInputRef}
                      autoComplete="off"
                    />
                  </div>

                  <div className={classes.btns}>
                    <div className={classes.entryAction}>
                      <div
                        className={classes.cancelEntryBtn}
                        onClick={props.onClose}
                      >
                        Cancel
                      </div>
                    </div>
                    <div className={classes.entryAction}>
                      <div className={classes.editBtn} onClick={editHandler}>
                        Update info
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </Fragment>
  );
}

export default EditForm;
