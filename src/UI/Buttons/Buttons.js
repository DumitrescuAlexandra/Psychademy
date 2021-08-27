import { NavLink } from "react-router-dom";
import classes from "./Buttons.module.css";

const AboutButtons = () => {
  return (
    <div className={classes.aboutBtn}>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/aboutMe">
            {" "}
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/aboutCNT">
            {" "}
            About CBT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AboutButtons;
