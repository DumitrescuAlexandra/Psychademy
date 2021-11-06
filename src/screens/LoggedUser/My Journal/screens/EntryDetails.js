import { useParams } from "react-router-dom";
import React from "react";

import DetailedEntry from "../DetailedEntry";

const DUMMY_ENTRIES = [
  {
    id: "e1",
    date: "22-nov-2020",
    title: "I hate my job",
    message:
      "Today my lazy co-worker has been promoted. It's so unfair! I hate my stupid manager and I can't stand this workplace anymore!",
  },
  {
    id: "e2",
    date: "02-dec-2020",
    title: "I love my new manager",
    message:
      "The lazy coworker, my actual direct manager took me in for a meeting and offered me a raise and pep talk",
  },
];

const EntryDetails = () => {
  const params = useParams();

  const entry = DUMMY_ENTRIES.find((entry) => entry.id === params.entryId);

  if (!entry) {
    return <p> No entry found!</p>;
  }

  return (
    <div>
      <DetailedEntry
        text={entry.message}
        date={entry.date}
        title={entry.title}
      ></DetailedEntry>
    </div>
  );
};

export default EntryDetails;
