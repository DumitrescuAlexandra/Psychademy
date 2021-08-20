import classes from "./MainNavigation.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const MainNavigation = () => {
  return (
    <div className={classes.NavBar}>
    <header className={classes.header}>
        <span className={classes.brand}> Ciprian Pertea </span>
        <Navigation />
        <MobileNavigation/>
    </header>
    </div>
  );
};

export default MainNavigation;