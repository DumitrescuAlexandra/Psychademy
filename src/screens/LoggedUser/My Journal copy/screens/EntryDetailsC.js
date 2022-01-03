import { useHistory, Link } from "react-router-dom";
// import React, { useEffect } from "react";
import Modal from "react-modal";
// import LoadingSpinner from "../../../../UI/LoadingSpinner";
// import NotFound from "../../../Not found/NotFound";
import classes from "./EntryDetailsC.module.css";
// import DetailedEntry from "../DetailedEntryC";
// import useHttp from "../../../../hooks/use-http";
// import { getSingleEntry } from "../../../../lib/api";

// import { db } from "../../../../Firebase/index";
// import { doc, getDoc } from "firebase/firestore";

const EntryDetails = (props) => {
  // const params = useParams();
  const history = useHistory();

  // const { entryId } = params;

  // const entryRef = doc(db, "journal", "entryId");
  // const entrySnap = getDoc(entryRef);

  // const getEntry = () => {
  //   const entryDet = { id: entryRef.id, ...entrySnap.data() };
  //   return entryDet;
  // };

  // const detailedEntry = getEntry(entryId);

  // const detailedEntry = db.getDoc(
  //   doc(db, "journal", "entryId").then({
  //     id: doc(db, "journal", "entryId").id,
  //     ...getDoc(doc(db, "journal", "entryId").data()),
  //   })
  // );

  // const getDetailedEntry = () => {
  //   const entryRef = doc(db, "entries", entryId);
  //   const entrySnap = getDoc(entryRef);

  // const detailedEntry = entrySnap.exists()
  //   ? { id: entryRef.id, ...entrySnap.data() }
  //   : console.log("Oooops! No entry found!");

  // return detailedEntry;
  // };

  // const {
  //   sendRequest,
  //   status,
  //   data: detailedEntry,
  //   error,
  // } = useHttp(getDetailedEntry, true);

  // useEffect(() => {
  //   sendRequest(entryId);
  // }, [sendRequest, entryId]);

  // if (status === "pending") {
  //   <div className="centered">
  //     <LoadingSpinner />
  //   </div>;
  // }

  // if (error) {
  //   return <p className="centered focused">{error}</p>;
  // }

  // if (!detailedEntry.message) {
  //   return <NotFound />;
  // }

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
        <div className={classes.detailedEntry}>
          <div className={classes.entry}>
            <div className={classes.banner}>
              <div className={classes.title}>
                <p>{props.title}</p>
              </div>
              <div className={classes.date}>
                {" "}
                <p>{props.date}</p>
              </div>
              <div className={classes.message}>
                <p>{props.message}</p>
              </div>
            </div>
            <Link to="/Journal"> Back </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EntryDetails;
