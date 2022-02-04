import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AccountInfo.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import EditForm from "./EditForm";
import { db } from "../../../../Firebase/index";
import { getDoc, doc, setDoc } from "firebase/firestore";
import PatientInfo from "./PatientInfo";
import { useAuth } from "../../../../contexts/AuthContext";

function AccountInfo() {
  const [modal, setModal] = useState(false);
  const { getCurrentUserId } = useAuth();
  const userUID = getCurrentUserId();

  const [detailsFullName, setDetailsFullName] = useState();
  const [detailsBirthDate, setDetailsBirthDate] = useState();
  const [detailsPhone, setDetailsPhone] = useState();
  const [detailsContactName, setDetailsContactName] = useState();
  const [detailsContactRelationship, setDetailsContactRelationship] =
    useState();
  const [detailsContactPhone, setDetailsContactPhone] = useState();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      const getDetails = async (id) => {
        const docRef = doc(db, "accountDetails", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDetailsFullName(docSnap.data().fullName);
          setDetailsBirthDate(docSnap.data().birthDate);
          setDetailsPhone(docSnap.data().phone);
          setDetailsContactName(docSnap.data().contactName);
          setDetailsContactRelationship(docSnap.data().contactRelationship);
          setDetailsContactPhone(docSnap.data().contactPhone);
        } else {
          console.log("No such account!");
          setDoc(doc(db, "accountDetails", id), {
            fullName: "Please update your info",
            birthDate: "Please update your info",
            phone: "Please update your info",
            contactName: "Please update your info",
            contactRelationship: "Please update your info",
            contactPhone: "Please update your info",
          });
        }
      };
      getDetails(userUID);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [userUID]);

  const editHandler = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const closeEditing = () => {
    setModal(false);
  };

  const history = useHistory();
  const backHandler = () => {
    history.push("/Account");
  };

  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.infoPage}>
        <div className={classes.infoTitle}>
          <p> Personal information</p>
        </div>

        <PatientInfo
          id={userUID}
          fullName={detailsFullName}
          birthDate={detailsBirthDate}
          phone={detailsPhone}
          contactName={detailsContactName}
          contactRelationship={detailsContactRelationship}
          contactPhone={detailsContactPhone}
        />

        <div className={classes.buttons}>
          <div
            className={classes.editBtn}
            onClick={() => {
              history.push("/Account");
            }}
          >
            <p>Back</p>
          </div>
          <div className={classes.editBtn} onClick={editHandler}>
            <p>Edit my info</p>
          </div>
        </div>
        {modal && <EditForm onClose={closeEditing} />}
      </div>
    </Fragment>
  );
}

export default AccountInfo;
