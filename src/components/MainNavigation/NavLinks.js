import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const NavLinks = () => {
  return (
    <div className={classes.navLinks}>
      <p> Menu </p>
      <ul>
        <li>
          <Link to="/About">About </Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/PatientZone">Patient Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
