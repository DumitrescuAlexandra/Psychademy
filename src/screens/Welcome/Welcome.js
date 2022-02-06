import React from "react";
import classes from "./Welcome.module.css";

import NavigationButtons from "../../components/MainNavigation/NavigationButtons";

import welcome from "../../Images/welcomePage.jpg";

const Welcome = () => {
  return (
    <div className={classes.welcomePage}>
      <div className={classes.welcomeImg}>
        <img src={welcome} alt=""></img>
      </div>
      <div className={classes.contents}>
        <div className={classes.hero}>
          <p className={classes.title}> Adapt. Improvise. Overcome.</p>
          <p className={classes.motto}>
            I can help you gain control over your cognitive resources and
            mastercraft your destiny.
          </p>
        </div>
        <NavigationButtons />
      </div>
    </div>
  );
};

export default Welcome;
