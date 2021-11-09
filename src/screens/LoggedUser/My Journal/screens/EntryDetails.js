import { useParams, useHistory } from "react-router-dom";
import React from "react";
import Modal from "react-modal";

import classes from "./EntryDetails.module.css";
import DetailedEntry from "../DetailedEntry";

const DUMMY_ENTRIES = [
  {
    id: "e1",
    date: "22-nov-2020 - 12.47PM",
    title: "I hate my job",
    message:
      "Today my lazy co-worker has been promoted. It's so unfair! I hate my stupid manager and I can't stand this workplace anymore!",
  },
  {
    id: "e2",
    date: "02-dec-2020 - 3.21PM",
    title: "I love my new manager",
    message:
      "The lazy coworker, my actual direct manager took me in for a meeting and offered me a raise and pep talk",
  },
];

const EntryDetails = () => {
  const params = useParams();
  const history = useHistory();

  const entry = DUMMY_ENTRIES.find((entry) => entry.id === params.entryId);

  if (!entry) {
    return <p> No entry found!</p>;
  }

  return (
    <div className={classes.detailsPage}>
      <Modal
        isOpen={true}
        className={classes.entryModalBck}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(28, 28, 28, 0.9)",
          },
        }}
      >
        <img
          src="/Images/close.svg"
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.push("/Journal")}
        ></img>
        <DetailedEntry
          message={entry.message}
          date={entry.date}
          title={entry.title}
        ></DetailedEntry>
      </Modal>
    </div>
  );
};

export default EntryDetails;
