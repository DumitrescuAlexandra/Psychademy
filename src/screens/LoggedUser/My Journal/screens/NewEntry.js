import React from "react";

import EntryForm from "../EntryForm";

const NewEntry = () => {
  const addEntryHandler = (entryData) => {
    console.log(entryData);
  };

  return (
    <div>
      <EntryForm onAddEntry={addEntryHandler}></EntryForm>
    </div>
  );
};

export default NewEntry;
