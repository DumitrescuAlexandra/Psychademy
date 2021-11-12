import React, { Fragment } from "react";
import classes from "./Mood.module.css";

const DUMMY_MOODS = [
  {
    id: "1",
    src: "/Images/horrible.svg",
    alt: "",
    value: "1",
  },
  {
    id: "2",
    src: "/Images/sad.svg",
    alt: "",
    value: "2",
  },
  { id: "3", src: "/Images/meh.svg", alt: "", value: "3" },
  { id: "4", src: "/Images/happy.svg", alt: "", value: "4" },
  { id: "5", src: "/Images/wonderful.svg", alt: "", value: "5" },
];

function Mood(props) {
  return (
    <Fragment>
      <ul className={classes.list}>
        {DUMMY_MOODS.map((mood) => (
          <Mood
            key={mood.id}
            id={mood.id}
            src={mood.src}
            alt={mood.alt}
            value={mood.value}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default Mood;
