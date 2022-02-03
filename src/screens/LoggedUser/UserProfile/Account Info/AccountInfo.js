import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AccountInfo.module.css";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import EditForm from "./EditForm";
import { db } from "../../../../Firebase/index";
import { collection, getDocs } from "firebase/firestore";
import PatientInfo from "./PatientInfo";

function AccountInfo(props) {
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState([]);

  const accountDetailsCollectionRef = collection(db, "accountDetails");

  useEffect(() => {
    let mounted = true;
    const getDetails = async () => {
      const data = await getDocs(accountDetailsCollectionRef);
      if (mounted) {
        setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    getDetails();

    return function cleanup() {
      mounted = false;
    };
  }, [accountDetailsCollectionRef]);

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
        {details.map((det) => (
          <PatientInfo
            id={det.id}
            key={det.id}
            fullName={det.fullName}
            birthDate={det.birthDate}
            phone={det.phone}
            contactName={det.contactName}
            contactRelationship={det.contactRelationship}
            contactPhone={det.contactPhone}
          />
        ))}
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
