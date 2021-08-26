import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
