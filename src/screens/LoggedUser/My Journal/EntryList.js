import React from "react";

import { Link, Route } from "react-router-dom";
import EntryDetails from "./screens/EntryDetails";

import classes from "./EntryList.module.css";
import JournalEntry from "./JournalEntry";

const EntryList = () => {
  const DUMMY_ENTRIES = [
    {
      id: "e1",
      date: "Thu, 22-nov-2020 - 12.47PM",
      title: "I hate my job",
      message:
        "Today my lazy co-worker has been promoted. It's so unfair! I hate my stupid manager and I can't stand this workplace anymore!",
    },
    {
      id: "e2",
      date: "Wed, 02-dec-2020 - 3.21PM",
      title: "I love my new manager",
      message:
        "The lazy coworker, my actual direct manager took me in for a meeting and offered me a raise and pep talk",
    },
  ];
  return (
    <div className={classes.journalPage}>
      <div className={classes.journalTitle}>
        <p>My journal</p>
        <img src="/Images/sort.png" alt="" height="32px" width="32px" />
      </div>
      <ul className={classes.entriesList}>
        {DUMMY_ENTRIES.map((entry) => (
          <JournalEntry
            key={entry.id}
            id={entry.id}
            date={entry.date}
            title={entry.title}
            message={entry.message}
          />
        ))}
      </ul>
      <div className={classes.newEntry}>
        <Link to="/new-entry"> Add entry </Link>
      </div>
      <Route path="/Journal/:entryId">
        <EntryDetails />
      </Route>
    </div>
  );
};

export default EntryList;
