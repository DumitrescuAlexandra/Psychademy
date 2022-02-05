import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

import brain from "../../Images/Brain.svg";

const MainNavigation = () => {
  return (
    <div className={classes.navBar}>
      <img src={brain} alt="brain" className={classes.brainImage} />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default MainNavigation;
