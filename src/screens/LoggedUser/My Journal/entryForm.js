import { React, useRef, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import Modal from "react-modal";
import LoadingSpinner from "../../../UI/LoadingSpinner";

import classes from "./EntryForm.module.css";

const EntryForm = (props) => {
  const history = useHistory();

  const [isEntering, setIsEntering] = useState(false);

  const titleInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ title: enteredTitle, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <div classname={classes.entryFormPage}>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave this page? All your entered data will be lost"
        }
      />
      <Modal
        isOpen={true}
        className={classes.entryModalBck}
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
        <div className={classes.entryModal}>
          <img
            src="/Images/close.svg"
            alt=""
            onClick={() => history.push("/Account")}
          ></img>
          <p className={classes.entryTitle}> My journal</p>
          <form
            onFocus={formFocusedHandler}
            className={classes.addEntryForm}
            onSubmit={submitFormHandler}
          >
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
            <div className={classes.entryControl}>
              <label htmlFor="text" className={classes.labelName}>
                <span className={classes.textContent}> Your text </span>{" "}
              </label>
              <textarea id="text" rows="5" ref={textInputRef}></textarea>
            </div>
            <div className={classes.entryAction}>
              <div
                onClick={finishEnteringHandler}
                className={classes.addEntryBtn}
              >
                Add entry
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EntryForm;
