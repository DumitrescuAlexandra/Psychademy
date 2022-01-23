import React, { useState, useEffect } from "react";
import classes from "./MyUploads.module.css";
import UploadItem from "./Items/UploadItem";
import { Link } from "react-router-dom";
import { storage } from "../../../Firebase";
import AssignmentsPage from "./AssignmentsPage";

function MyUploads() {
  const listRef = storage.ref("files/uploads");

  const [uploads, setUploads] = useState([]);

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

  return (
    <div className={classes.uploadsPage}>
      <div className={classes.title}>
        <p>My uploads</p>
      </div>
      <AssignmentsPage />
      <ul className={classes.uploadsList}>
        {uploads.map((upload) => (
          <UploadItem key={upload.name} name={upload.name} url={upload.url} />
        ))}{" "}
      </ul>
    </div>
  );
}

export default MyUploads;
