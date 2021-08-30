import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const MainNavigation = () => {
  return (
    <div className={classes.navBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default MainNavigation;
