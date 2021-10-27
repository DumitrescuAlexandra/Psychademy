import React from "react";
import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Modal from "react-modal";
import LoadingSpinner from "../../../UI/LoadingSpinner";

import classes from "./entryForm.module.css";

function entryForm(props) {
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
      <Modal>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="title">Enter a title</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Your text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add entry
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default entryForm;
