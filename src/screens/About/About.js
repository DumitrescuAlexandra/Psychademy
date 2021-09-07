import React from "react";
import classes from "./About.module.css";

import AboutCBT from "./AboutCBT";
import AboutMe from "./AboutMe";
import AboutButtons from "../../UI/Buttons/Buttons";

const About = () => {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.navBar}></div>
      <div className={classes.title}></div>
      <AboutButtons />
      <AboutMe></AboutMe>
      <AboutCBT></AboutCBT>
    </div>
  );
};

export default About;
