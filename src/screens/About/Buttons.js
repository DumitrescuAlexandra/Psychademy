import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Buttons.module.css";

function Buttons() {
  const [active, setActive] = useState({
    activeButton: null,
    buttons: [
      {
        name: "About Me",
        path: "/about/aboutMe",
      },
      {
        name: "About CBT",
        path: "/about/aboutCBT",
      },
    ],
  });

  const toggleActiveHandler = (i) => {
    setActive({ ...active, activeButton: active.buttons[i] });
  };

  const toggleActiveClass = (i) => {
    if (active.buttons[i] === active.activeButton) {
      return classes.btn_active;
    } else {
      return classes.btn_inactive;
    }
  };

  return (
    <div className={classes.aboutSection}>
      <div className={classes.sectionTitle}>
        <p>Learn more about CBT</p>
        <p>therapist and therapy</p>
      </div>
      <div className={classes.aboutBtn}>
        {active.buttons.map((el, i) => (
          <NavLink
            key={i}
            className={toggleActiveClass(i)}
            onClick={toggleActiveHandler}
            to={active.buttons[i].path}
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            {active.buttons[i].name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
