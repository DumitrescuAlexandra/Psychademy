import { useParams, Route, useRouteMatch } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

// import HighlightedQuote from "../components/quotes/HighlightedQuote";
// import Comments from "../components/comments/Comments";
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
    return <p> No Quote found! </p>;
  }

  return (
    <div>
      {/* <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} /> */}
      <Route path={`${match.path}`} exact>
        <div className="centered">
          {" "}
          {/* <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments{" "}
          </Link> */}
        </div>
      </Route>

      {/* <Route path={`${match.path}/comments`}>
        <Comments />
      </Route> */}
    </div>
  );
};

export default EntryDetails;
