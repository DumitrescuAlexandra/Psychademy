import { Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Buttons.module.css";

function Buttons() {
  const [active, setActive] = useState({
    activeButton: null,
    buttons: [
      { name: "About Me", path: "/about/aboutMe" },
      { name: "About CBT", path: "/about/aboutCBT" },
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
    <div className={classes.aboutBtn}>
      {active.buttons.map((el, i) => (
        <Link
          key={i}
          className={toggleActiveClass(i)}
          onclick={toggleActiveHandler}
          to={active.buttons[i].path}
        >
          {active.buttons[i].name}
        </Link>
      ))}
    </div>
  );
}

export default Buttons;

// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import classes from "./Buttons.module.css";

// const AboutButtons = () => {
//   // const [active, setActive] = useState("true");

//   const showAboutHandler = (event) => {
//     // event.preventDefault();
//     console.log("Activated!");
//   };

//   return (
//     <div className={classes.aboutBtn}>
//       <Link
//         className={classes.btn_aboutMe}
//         to="/about/aboutMe"
//         exact
//         onClick={showAboutHandler}
//       >
//         {" "}
//         About Me
//       </Link>

//       <Link
//         className={classes.btn_aboutCBT}
//         to="/about/aboutCBT"
//         exact
//         onClick={showAboutHandler}
//       >
//         {" "}
//         About CBT
//       </Link>
//     </div>
//   );
// };

// export default AboutButtons;
