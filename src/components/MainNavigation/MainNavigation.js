import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const MainNavigation = () => {
  return (
    <div className={classes.navBar}>
      <span className={classes.brand}> CIPRIAN PERTEA </span>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default MainNavigation;
