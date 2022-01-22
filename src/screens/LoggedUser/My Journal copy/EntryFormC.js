import { React, useRef } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router";
import { db } from "../../../Firebase/index";
import { collection, addDoc } from "firebase/firestore";

import LoadingSpinner from "../../../UI/LoadingSpinner";
import classes from "./EntryFormC.module.css";

const EntryForm = (props) => {
  const titleInputRef = useRef();
  const messageInputRef = useRef();

  const history = useHistory();

  const date = `${new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}  -  ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const trimmedTitle =
      enteredTitle.length > 15
        ? enteredTitle.slice(0, 15) + "..."
        : enteredTitle;
    const enteredMessage = messageInputRef.current.value;

    props.onAddEntry(
      addDoc(collection(db, "journal"), {
        title: trimmedTitle,
        message: enteredMessage,
        date: date,
      })
    );
  };

  return (
    <div className={classes.entryFormPage}>
      <Modal
        isOpen={true}
        className={classes.newEntryModalBck}
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
          onClick={() => history.replace("/Journal")}
        ></img>
        <div className={classes.entryContainer}>
          <div className={classes.formTitle}>
            <p> Create new Entry</p>
          </div>
          <div className={classes.entryDate}>
            <p>{date}</p>
          </div>

          <div className={classes.addEntryForm}>
            <form className={classes.addEntryForm}>
              {props.isLoading && (
                <div className={classes.loading}>
                  <LoadingSpinner />
                </div>
              )}
              <div className={classes.entryControl}>
                <label htmlFor="title" className={classes.labelName}>
                  <span className={classes.titleContent}> Enter a title </span>{" "}
                </label>
                <input
                  type="text"
                  id="title"
                  ref={titleInputRef}
                  autoComplete="off"
                />
              </div>
              <div className={classes.entryControlM}>
                <label htmlFor="text" className={classes.labelName}>
                  <span className={classes.textContent}> Your text </span>{" "}
                </label>
                <textarea
                  id="message"
                  type="text"
                  rows="5"
                  autoComplete="off"
                  style={
                    ({ resize: "none" },
                    { overflow: "auto" },
                    { maxWidth: "100%" },
                    { maxHeight: "100%" },
                    { fontFamily: "Lato" })
                  }
                  ref={messageInputRef}
                />
              </div>
              <div className={classes.btns}>
                <div className={classes.entryAction}>
                  <div
                    className={classes.cancelEntryBtn}
                    onClick={() => history.replace("/Journal")}
                  >
                    Cancel
                  </div>
                </div>
                <div className={classes.entryAction}>
                  <div
                    className={classes.addEntryBtn}
                    onClick={submitFormHandler}
                  >
                    Add entry
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EntryForm;
