import { useState } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import classes from "./EntryDetailsC.module.css";
// import DetailedEntry from "../DetailedEntryC";

const DUMMY_ENTRIES = [
  {
    id: "111111",
    date: "21/04/2020 22:05:36",
    title: "aaaaaaaaa",
    message: "blablabla",
  },
  {
    id: "222222",
    date: "21/04/2020 22:05:36",
    title: "bbbbbbbbb",
    message: "blublublub",
  },
  {
    id: "333333",
    date: "21/04/2020 22:05:36",
    title: "ccccccccccccccccccccc",
    message: "bloblobloblob",
  },
  {
    id: "444444",
    date: "21/04/2020 22:05:36",
    title: "ddddddddddddddddddddd",
    message: "blublublublub",
  },
];

const EntryDetails = () => {
  const history = useHistory();

  const params = useParams();

  const singleEntry = DUMMY_ENTRIES.find(
    (entry) => entry.id === params.entryId
  );

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

        <div className={classes.entryPage}>
          <div className={classes.entry}>
            <div className={classes.banner}>
              <div className={classes.title}>
                <p>{singleEntry.title}</p>
                {/* <p>{"aaaaaaaaaaaaaadddd"}</p> */}
              </div>
              <div className={classes.date}>
                {" "}
                <p>{singleEntry.date}</p>
                {/* <p>"220..0dd022da"</p> */}
              </div>
              <div className={classes.message}>
                <p>{singleEntry.message}</p>
                {/* <p>"Hhdhsuaujdhsajk"</p> */}
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
