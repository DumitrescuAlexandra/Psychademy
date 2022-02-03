import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./MyUploads.module.css";
import UploadItem from "./Items/UploadItem";
import { storage } from "../../../Firebase";
import AssignmentsPage from "./AssignmentsPage";
import BackArrow from "../../../UI/Buttons/BackArrow";

function MyUploads() {
  const listRef = storage.ref("files/uploads");

  const [uploads, setUploads] = useState([]);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Choose");

  const changeHandler = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const uploadHandler = () => {
    const uploadTask = storage.ref(`files/uploads/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("files/uploads")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    setFileName("Choose...");
  };

  const trimmedFileName =
    fileName.length > 12 ? fileName.slice(0, 12) + "..." : fileName;

  const downloadHandler = (name) => {
    storage
      .ref(`files/uploads/${name}`)
      .getDownloadURL()
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();
      });
  };

  useEffect(() => {
    let mounted = true;

    const getUploads = () => {
      let uploaded = [];

      if (mounted) {
        listRef
          .listAll()
          .then((res) => {
            res.items.forEach((itemRef) => {
              uploaded.push({
                name: itemRef.name,
                url: itemRef.fullPath,
              });
            });
            console.log(uploaded);
            setUploads(uploaded);
          })
          .catch((error) => {
            console.log("Whoooops!");
          });
      }
    };

    getUploads();

    return function cleanup() {
      mounted = false;
    };
  }, []);
  const history = useHistory();
  const backHandler = () => {
    history.push("/UserPage");
  };
  return (
    <div className={classes.uploadsPage}>
      <BackArrow backHandler={backHandler} />
      <div className={classes.title}>
        <p>My uploads</p>
      </div>
      <AssignmentsPage />
      <ul className={classes.uploadsList}>
        {uploads.map((upload) => (
          <UploadItem
            key={upload.name}
            name={upload.name}
            url={upload.url}
            onDownload={() => {
              downloadHandler(upload.name);
            }}
          />
        ))}{" "}
      </ul>
      <div>
        <input
          type="file"
          id="files"
          onChange={changeHandler}
          className={classes.inputField}
        />
      </div>
      <div className={classes.actionBtns}>
        <div
          className={classes.backBtn}
          onClick={() => history.push("/UserPage")}
        >
          Back{" "}
        </div>
        <label htmlFor="files" className={classes.chooseBtn}>
          {trimmedFileName}
        </label>
        <div className={classes.uploadBtn} onClick={uploadHandler}>
          Upload
        </div>
      </div>
    </div>
  );
}

export default MyUploads;
