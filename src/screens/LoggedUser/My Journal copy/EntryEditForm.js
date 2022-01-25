import React, { useRef } from "react";
import classes from "./EntryEditForm.module.css";
import Modal from "react-modal";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import { useHistory } from "react-router";
import { db } from "../../../Firebase/index";
import { updateDoc, doc } from "firebase/firestore";

function EntryEditForm(props) {
  const titleInputRef = useRef();
  const messageInputRef = useRef();

  const preloadedTitle = props.title;
  const preloadedMessage = props.message;

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

  const submitEditHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const trimmedTitle =
      enteredTitle.length > 15
        ? enteredTitle.slice(0, 15) + "..."
        : enteredTitle;
    const enteredMessage = messageInputRef.current.value;

    const updateEntry = async (id) => {
      const newlyEditedEntry = {
        title: trimmedTitle,
        message: enteredMessage,
        date: date,
      };
      const docRef = doc(db, "journal", props.id);

      await updateDoc(docRef, newlyEditedEntry);
    };
    updateEntry();
    history.push("/Journal");

    // updateDoc(collection(db, "journal", id), {
    //   id: props.id,
    //   title: trimmedTitle,
    //   message: enteredMessage,
    //   date: date,
    // });
  };

  return (
    <div>
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
            <p> Edit your entry</p>
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
                  <span className={classes.titleContent}> Edit title</span>{" "}
                </label>
                <input
                  type="text"
                  id="title"
                  ref={titleInputRef}
                  autoComplete="off"
                  defaultValue={preloadedTitle}
                />
              </div>
              <div className={classes.entryControlM}>
                <label htmlFor="text" className={classes.labelName}>
                  <span className={classes.textContent}> Edit text </span>{" "}
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
                  defaultValue={preloadedMessage}
                />
              </div>
              <div className={classes.btns}>
                <div className={classes.entryAction}>
                  <div
                    className={classes.cancelEntryBtn}
                    onClick={() => history.push(`/Journal/`)}
                  >
                    Cancel
                  </div>
                </div>
                <div className={classes.entryAction}>
                  <div
                    className={classes.addEntryBtn}
                    onClick={submitEditHandler}
                  >
                    Done!
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EntryEditForm;
