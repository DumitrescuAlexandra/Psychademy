import React, { Fragment, useState, useEffect } from "react";
import HomeworkItem from "../Items/HomeworkItem";
import classes from "./MyHomework.module.css";

function MyHomework(props) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles(props.files);
  }, [props.files]);

  return (
    <Fragment>
      <ul className={classes.homeworkList}>
        {files &&
          files.map((file) => (
            <HomeworkItem
              key={file.id}
              id={file.id}
              date={file.date}
              name={file.name}
            />
          ))}
      </ul>
    </Fragment>
  );
}

export default MyHomework;
