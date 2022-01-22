import { useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import EntryEditForm from "../EntryEditForm";
import Modal from "react-modal";
import classes from "./EntryDetailsC.module.css";

import { db } from "../../../../Firebase/index";
import { getDoc, doc } from "firebase/firestore";

const EntryDetails = () => {
  const history = useHistory();

  const params = useParams();

  const [singleEntryTitle, setSingleEntryTitle] = useState();
  const [singleEntryDate, setSingleEntryDate] = useState();
  const [singleEntryMessage, setSingleEntryMessage] = useState();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const getSingleEntry = async (id) => {
        const docRef = doc(db, "journal", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());
          setSingleEntryTitle(docSnap.data().title);
          setSingleEntryDate(docSnap.data().date);
          setSingleEntryMessage(docSnap.data().message);
        } else {
          console.log("No such document!");
        }
      };

      getSingleEntry(params.entryId);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [params.entryId]);

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
                <p>{singleEntryTitle}</p>
              </div>
              <div className={classes.date}>
                {" "}
                <p>{singleEntryDate}</p>
              </div>
              <div className={classes.message}>
                <p>{singleEntryMessage}</p>
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <div className={classes.backBtn}>
              <Link to="/Journal"> Back </Link>
            </div>
            <div
              className={classes.editBtn}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <p>Edit</p>
            </div>
            {isEditing && <EntryEditForm />}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EntryDetails;
