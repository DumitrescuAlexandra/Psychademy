import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import LoadingSpinner from "../../../../UI/LoadingSpinner";
import classes from "./EditForm.module.css";

function EditForm(props) {
  const editHandler = (e) => {
    e.prefentDefault();
    setLoading(true);
  };

  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <div className={classes.entryFormPage}>
        (
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
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}>
                      {" "}
                      Enter your full name{" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
                    autoComplete="off"
                  />
                </div>
                <div className={classes.entryControl}>
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}>
                      {" "}
                      Enter your birthdate{" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
                    autoComplete="off"
                  />
                </div>
                <div className={classes.entryControl}>
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}>
                      {" "}
                      Enter your Phone number{" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
                    autoComplete="off"
                  />
                </div>

                <div className={classes.formTitle}>
                  <p> Edit emergency contact</p>
                </div>

                <div className={classes.entryControl}>
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}>
                      {" "}
                      Contact's full name{" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
                    autoComplete="off"
                  />
                </div>
                <div className={classes.entryControl}>
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}>
                      {" "}
                      Your relationship{" "}
                    </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
                    autoComplete="off"
                  />
                </div>
                <div className={classes.entryControl}>
                  <label htmlFor="title" className={classes.labelName}>
                    <span className={classes.titleContent}> Phone number </span>{" "}
                  </label>
                  <input
                    type="text"
                    id="title"
                    //   ref={titleInputRef}
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
                      Add entry
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal>
        )
      </div>
    </Fragment>
  );
}

export default EditForm;
