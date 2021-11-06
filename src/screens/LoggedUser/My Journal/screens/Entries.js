import React from "react";
import EntryList from "../EntryList";

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

const Entries = () => {
  return <EntryList entries={DUMMY_ENTRIES}></EntryList>;
};

export default Entries;
