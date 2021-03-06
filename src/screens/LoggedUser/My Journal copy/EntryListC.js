import React, { useState, useEffect, Fragment } from "react";

import { useHistory } from "react-router-dom";
import classes from "./EntryListC.module.css";
import JournalEntry from "./JournalEntryC";

import { db } from "../../../Firebase/index";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import BackArrow from "../../../UI/Buttons/BackArrow";

import sort from "../../../Images/sort.png";

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
  }, [journalCollectionRef]);

  const backHandler = () => {
    history.push("/UserPage");
  };

  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.journalPage}>
        <div className={classes.journalTitle}>
          <p>My journal</p>
          <img src={sort} alt="" height="32px" width="32px" />
        </div>
        <ul className={classes.entriesList}>
          {entries.map((entry) => (
            <JournalEntry
              key={entry.id}
              id={entry.id}
              date={entry.date}
              title={entry.title}
              message={entry.message}
              deleteEntryHandler={() => {
                deleteDoc(doc(db, "journal", entry.id));
                alert("Done! Entry deleted!");
              }}
            />
          ))}
        </ul>

        <div className={classes.newEntry}>
          <div
            className={classes.cancelBtn}
            onClick={() => history.push("/UserPage")}
          >
            {" "}
            Back{" "}
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
    </Fragment>
  );
};

export default EntryList;
