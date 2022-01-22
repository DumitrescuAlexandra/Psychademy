import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import EntryForm from "../EntryFormC";
import useHttp from "../../../../hooks/use-http";
// import { addEntry } from "../../../../lib/api";

const NewEntry = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(() => {}, false);

  useEffect(() => {
    if (status === "completed") {
      history.push("/Journal");
    }
  }, [status, history]);

  const addEntryHandler = async (entryData) => {
    sendRequest(entryData);
  };

  return (
    <div>
      <EntryForm
        isLoading={status === "pending"}
        onAddEntry={addEntryHandler}
      ></EntryForm>
    </div>
  );
};

export default NewEntry;
