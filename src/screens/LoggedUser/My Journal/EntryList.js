import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import classes from "./Journal.module.css";
import JournalEntry from "./JournalEntry";

const sortEntries = (entries, ascending) => {
  return entries.sort((entryA, entryB) => {
    if (ascending) {
      return entryA.id > entryB.id ? 1 : -1;
    } else {
      return entryA.id < entryB.id ? 1 : -1;
    }
  });
};

function EntryList(props) {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedEntries = sortEntries(props.Entries, isSortingAscending);

  const changeSortingHandler = () => {
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
  };
  return (
    <div className={classes.journalPage}>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.entriesList}>
        {sortedEntries.map((entry) => (
          <JournalEntry
            key={entry.id}
            id={entry.id}
            title={entry.title}
            text={entry.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
