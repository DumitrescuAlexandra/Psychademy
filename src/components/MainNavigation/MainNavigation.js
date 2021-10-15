import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const MainNavigation = () => {
  return (
    <div className={classes.navBar}>
      <img src="/Images/brain.svg" alt="" className={classes.brainImage} />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default MainNavigation;
