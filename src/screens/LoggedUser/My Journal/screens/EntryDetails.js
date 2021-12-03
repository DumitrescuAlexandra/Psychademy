import { useParams, useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import Modal from "react-modal";
import LoadingSpinner from "../../../../UI/LoadingSpinner";
import NotFound from "../../../Not found/NotFound";
import classes from "./EntryDetails.module.css";
import DetailedEntry from "../DetailedEntry";
import useHttp from "../../../../hooks/use-http";
import { getSingleEntry } from "../../../../lib/api";

const EntryDetails = () => {
  const params = useParams();
  const history = useHistory();

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
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedEntry.message) {
    return <NotFound />;
  }

  return (
    <div className={classes.detailsPage}>
      <Modal
        isOpen={true}
        className={classes.entryModalBck}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(28, 28, 28, 0.9)",
          },
        }}
      >
        <img
          src="/Images/close.svg"
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.push("/Journal")}
        ></img>
        <DetailedEntry
          message={loadedEntry.message}
          date={loadedEntry.date}
          title={loadedEntry.title}
        ></DetailedEntry>
      </Modal>
    </div>
  );
};

export default EntryDetails;
