import React, { useState, useEffect } from "react";
import classes from "./Homework.module.css";
import { storage } from "../../../Firebase";
import AssignmentsPage from "./AssignmentsPage";
import HomeworkItem from "./Items/HomeworkItem";
import BackArrow from "../../../UI/Buttons/BackArrow";

function Homework(props) {
  const listRef = storage.ref("files/homework");

  const [homework, setHomework] = useState([]);

  const downloadHandler = (name) => {
    storage
      .ref(`files/homework/${name}`)
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

    const getHomework = () => {
      let assignments = [];

      if (mounted) {
        listRef
          .listAll()
          .then((res) => {
            res.items.forEach((itemRef) => {
              assignments.push({
                name: itemRef.name,
                url: itemRef.fullPath,
              });
            });
            console.log(assignments);
            setHomework(assignments);
          })
          .catch((error) => {
            console.log("Whoooops!");
          });
      }
    };

    getHomework();

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <div className={classes.homeworkPage}>
      <BackArrow />
      <div className={classes.homeworkTitle}>
        <p>My Homework</p>
      </div>
      <AssignmentsPage />
      {homework.map((homework) => (
        <HomeworkItem
          key={homework.name}
          name={homework.name}
          url={homework.url}
          onDownload={() => {
            downloadHandler(homework.name);
          }}
        />
      ))}{" "}
    </div>
  );
}

export default Homework;
