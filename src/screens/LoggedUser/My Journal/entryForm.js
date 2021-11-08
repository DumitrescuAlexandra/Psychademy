import { React, useRef } from "react";

import LoadingSpinner from "../../../UI/LoadingSpinner";
import classes from "./EntryForm.module.css";

const EntryForm = (props) => {
  const titleInputRef = useRef();
  const textInputRef = useRef();

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddEntry({ title: enteredTitle, text: enteredText, date: date });
  }

  return (
    <div className={classes.entryFormPage}>
      <form className={classes.addEntryForm} onSubmit={submitFormHandler}>
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
        <div className={classes.entryDate}>{date}</div>
        <div className={classes.entryAction}>
          <div className={classes.addEntryBtn}>Add entry</div>
        </div>
      </form>
    </div>
  );
};

export default EntryForm;
