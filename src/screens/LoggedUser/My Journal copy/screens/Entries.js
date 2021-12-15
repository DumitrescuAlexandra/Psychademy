import React, { useEffect } from "react";
import EntryList from "../EntryList";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import NotFound from "../../Not found/NotFound";
import useHttp from "../../../hooks/use-http";
import { getAllEntries } from "../../../lib/api";

const Entries = () => {
  const {
    sendRequest,
    status,
    data: loadedEntries,
    error,
  } = useHttp(getAllEntries, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedEntries || loadedEntries === 0)) {
    return <NotFound />;
  }

  return <EntryList entries={loadedEntries} />;
};

export default Entries;
