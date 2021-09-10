import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const NavLinks = (props) => {
  const closeMobileNav = () => props.isMobile && props.closeMobileMenu();

  return (
    <div className={classes.navLinks}>
      <p> Menu </p>
      <ul>
        <li onClick={closeMobileNav}>
          <Link to="/About">About </Link>
        </li>
        <li onClick={closeMobileNav}>
          <Link to="/Services">Services</Link>
        </li>
        <li onClick={closeMobileNav}>
          <Link to="/Contact">Contact</Link>
        </li>
        <li onClick={closeMobileNav}>
          <Link to="/PatientLogin">Patient Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
