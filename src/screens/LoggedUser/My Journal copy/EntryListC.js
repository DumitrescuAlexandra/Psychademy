import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import classes from "./EntryListC.module.css";
import JournalEntry from "./JournalEntryC";

import { db } from "../../../Firebase/index";
import { collection, getDocs } from "firebase/firestore";

const EntryList = () => {
  const history = useHistory();

  const journalCollectionRef = collection(db, "journal");

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getEntries = async () => {
      const data = await getDocs(journalCollectionRef);
      if (mounted) {
        setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    getEntries();

    return function cleanup() {
      mounted = false;
    };
    // }, [journalCollectionRef]);
  }, []);

  return (
    <div className={classes.journalPage}>
      <div className={classes.journalTitle}>
        <p>My journal</p>
        <img src="/Images/sort.png" alt="" height="32px" width="32px" />
      </div>
      <ul className={classes.entriesList}>
        {entries.map((entry) => (
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
        <div
          className={classes.cancelBtn}
          onClick={() => history.replace("/UserPage")}
        >
          {" "}
          Cancel{" "}
        </div>
        <div
          className={classes.addEntryBtn}
          onClick={() => history.push("/new-entry")}
        >
          {" "}
          Add Entry
        </div>
      </div>
    </div>
  );
};

export default EntryList;
