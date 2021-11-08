import React from "react";

import classes from "./EntryList.module.css";
import JournalEntry from "./JournalEntry";

const EntryList = (props) => {
  return (
    <div className={classes.journalPage}>
      <ul className={classes.entriesList}>
        {props.entries.map((entry) => (
          <JournalEntry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            text={entry.text}
            date={entry.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
