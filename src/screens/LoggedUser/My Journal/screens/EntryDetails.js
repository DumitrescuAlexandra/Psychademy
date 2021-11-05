import { useParams, Route, useRouteMatch } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import JournalEntry from "../JournalEntry";
import useHttp from "../hooks/use-http";
import { getSingleEntry } from "../lib/api";
import LoadingSpinner from "../../../../UI/LoadingSpinner";

const EntryDetails = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { entryId } = params;

  const {
    sendRequest,
    status,
    data: loadedEntry,
    error,
  } = useHttp(getSingleEntry, true);

  useEffect(() => {
    sendRequest(entryId);
  }, [sendRequest, entryId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedEntry.text) {
    return <p> No Entry found! </p>;
  }

  return (
    <div>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          {" "}
          <JournalEntry></JournalEntry>
        </div>
      </Route>
    </div>
  );
};

export default EntryDetails;
