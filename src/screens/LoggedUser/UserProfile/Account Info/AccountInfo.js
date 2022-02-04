import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AccountInfo.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import EditForm from "./EditForm";
import { db } from "../../../../Firebase/index";
import { getDoc, doc } from "firebase/firestore";
import PatientInfo from "./PatientInfo";
import { useAuth } from "../../../../contexts/AuthContext";

function AccountInfo() {
  const [modal, setModal] = useState(false);
  // const [details, setDetails] = useState([]);
  const { getCurrentUserId } = useAuth();
  const userUID = getCurrentUserId();

  const [detailsFullName, setDetailsFullName] = useState();
  const [detailsBirthDate, setDetailsBirthDate] = useState();
  const [detailsPhone, setDetailsPhone] = useState();
  const [detailsContactName, setDetailsContactName] = useState();
  const [detailsContactRelationship, setDetailsContactRelationship] =
    useState();
  const [detailsContactPhone, setDetailsContactPhone] = useState();

  // const accountDetailsCollectionRef = collection(db, "accountDetails");

  // useEffect(() => {
  //   let mounted = true;
  //   const getDetails = async () => {
  //     const data = await getDocs(accountDetailsCollectionRef);
  //     if (mounted) {
  //       setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     }
  //   };

  //   getDetails();

  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, [accountDetailsCollectionRef]);

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
          // key={det.id}
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
