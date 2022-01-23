import React, { useState } from "react";
import classes from "./MyUploads.module.css";
import UploadItem from "./Items/UploadItem";

function MyUploads() {
  const [uploads, setUploads] = useState([]);

  return (
    <div className={classes.uploadsPage}>
      <ul className={classes.uploadsList}>
        {uploads.map((upload) => (
          <UploadItem
            key={upload.id}
            url={upload.url}
            date={upload.date}
            name={upload.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default MyUploads;
