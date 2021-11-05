import { useEffect } from "react";

import EntryList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllEntries } from "../lib/api";
import NotFound from "../../../Not found/NotFound";
const Entries = () => {
  const {
    sendRequest,
    status,
    data: loadedEntry,
    error,
  } = useHttp(getAllEntries, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedEntry || loadedEntry.length === 0)) {
    return <NotFound />;
  }
  return <EntryList entries={loadedEntry}></EntryList>;
};

export default Entries;
