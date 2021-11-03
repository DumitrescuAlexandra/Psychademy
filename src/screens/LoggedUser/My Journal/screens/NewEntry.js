import { React, useEffect } from "react";
import { useHistory } from "react-router";

import EntryForm from "../EntryForm";
import useHttp from "../hooks/use-http";
import { addEntry } from "../lib/api";

const NewEntry = () => {
  const { sendRequest, status } = useHttp(addEntry);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/Entries");
    }
  }, [history, status]);

  const addEntryHandler = (entryData) => {
    sendRequest(entryData);
  };

  return (
    <EntryForm
      isLoading={status === "pending"}
      onAddEntry={addEntryHandler}
    ></EntryForm>
  );
};

export default NewEntry;
