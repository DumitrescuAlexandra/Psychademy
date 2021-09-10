import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Buttons.module.css";
import BackArrow from "./BackArrow";

function Buttons() {
  const [active, setActive] = useState({
    activeButton: null,
    buttons: [
      {
        name: "About Me",
        path: "/about/aboutMe",
        title1: "Learn about your",
        title2: "personal therapist",
      },
      {
        name: "About CBT",
        path: "/about/aboutCBT",
        title1: "Learn about the",
        title2: "benefits of CBT",
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
      <BackArrow />
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
