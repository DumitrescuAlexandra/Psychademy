import React from "react";

import EntryForm from "../EntryForm";

const NewEntry = () => {
  const addEntryHandler = (entryData) => {
    console.log(entryData);
  };

  return <EntryForm onAddEntry={addEntryHandler}></EntryForm>;
};

export default NewEntry;
