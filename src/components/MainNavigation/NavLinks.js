import classes from "./MainNavigation.module.css";

const NavLinks = () => {
  return (
    <div className={classes.navLinks}>
      <p> Menu </p>
      <ul>
        <li>
          <a href="/#About">About </a>
        </li>
        <li>
          <a href="/#Services">Services</a>
        </li>
        <li>
          <a href="/#Contact">Contact</a>
        </li>
        <li>
          <a href="/#PatientZone">Patient zone</a>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
