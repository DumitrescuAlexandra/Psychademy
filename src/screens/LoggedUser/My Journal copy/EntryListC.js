import React, { useState, useEffect } from "react";

import { useParams, Route, useHistory } from "react-router-dom";
import EntryDetails from "./screens/EntryDetailsC";
import classes from "./EntryListC.module.css";
import JournalEntry from "./JournalEntryC";
import { db } from "../../../Firebase/index";
import { collection, getDocs } from "firebase/firestore";

const EntryList = (props) => {
  const history = useHistory();
  const params = useParams();
  const { entryId } = params;

  const journalCollectionRef = collection(db, "journal");

  const [entries, setEntries] = useState([]);
  const [singleEntry, setSingleEntry] = useState({});

  useEffect(() => {
    const getEntries = async () => {
      const data = await getDocs(journalCollectionRef);
      setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEntries();
  }, [journalCollectionRef, entries, params, singleEntry.id]);

  //
  //
  // HOW TO find, not to MAP ?!?!

  useEffect(() => {
    const getSingleEntry = async () => {
      const detailedEntry = await entries.map(
        (singleEntry) => singleEntry.id === params.entryId
      );
      setSingleEntry(detailedEntry);
    };
    getSingleEntry();
  }, [entries, params.entryId]);
  //
  //
  //

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
      <Route path={`/Journal/${params.entryId}`}>
        <EntryDetails
          title={singleEntry.title}
          date={singleEntry.date}
          message={singleEntry.message}
        />
      </Route>
    </div>
  );
};

export default EntryList;
