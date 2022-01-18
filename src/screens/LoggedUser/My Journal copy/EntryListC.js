import React, { useState, useEffect } from "react";

import { useParams, Route, useHistory } from "react-router-dom";
// import EntryDetails from "./screens/EntryDetailsC";
import classes from "./EntryListC.module.css";
import JournalEntry from "./JournalEntryC";
// import DetailedEntry from "../My Journal copy/DetailedEntryC";
// import Modal from "react-modal/lib/components/Modal";
// import { db } from "../../../Firebase/index";
// import { collection } from "firebase/firestore";
import { useRouteMatch } from "react-router-dom";
import EntryDetails from "./screens/EntryDetailsC";

const DUMMY_ENTRIES = [
  { id: "111111", title: "aaaaaaaaa", message: "blablabla" },
  { id: "222222", title: "bbbbbbbbb", message: "blublublub" },
  { id: "333333", title: "ccccccccccccccccccccc", message: "bloblobloblob" },
  { id: "444444", title: "ddddddddddddddddddddd", message: "blublublublub" },
];

const EntryList = (props) => {
  const history = useHistory();
  const params = useParams();
  // const match = useRouteMatch();
  // const { entryId } = params;

  // const journalCollectionRef = collection(db, "journal");
  // const docRef = doc(db, "journal", `${doc.id}`);

  const [entries, setEntries] = useState([]);
  // const [singleEntry, setSingleEntry] = useState();

  useEffect(() => {
    const getEntries = () => {
      setEntries(DUMMY_ENTRIES);
    };

    getEntries();
  }, []);

  // useEffect(() => {
  //   const getSingleEntry = () => {
  //     setSingleEntry(
  //       DUMMY_ENTRIES.find((entry) => entry.id === params.entryId)
  //     );
  //   };
  //   getSingleEntry();
  // }, [params.entryId]);

  // useEffect(() => {
  //   let mounted = true;
  //   const getEntries = async () => {
  //     const data = await getDocs(journalCollectionRef);
  //     if (mounted) {
  //       setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     }
  //   };

  //   getEntries();

  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, [journalCollectionRef, entries, params]);

  //
  //

  return (
    <div className={classes.journalPage}>
      <div className={classes.journalTitle}>
        <p>My journal</p>
        <img src="/Images/sort.png" alt="" height="32px" width="32px" />
      </div>
      {/* <ul className={classes.entriesList}>
        {entries.map((entry) => (
          <JournalEntry
            key={entry.id}
            id={entry.id}
            date={entry.date}
            title={entry.title}
            message={entry.message}
          />
        ))}
      </ul> */}
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
