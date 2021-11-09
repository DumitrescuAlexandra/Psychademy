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
            date={entry.date}
            title={entry.title}
            message={entry.message}
          />
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
