import React, { Fragment } from "react";
import classes from "./About.module.css";

import AboutCBT from "./AboutCBT";
import AboutMe from "./AboutMe";
import AboutButtons from "../../UI/Buttons/Buttons";

const About = () => {
  return (
    <Fragment>
      <div className={classes.navBar}></div>
      <div className={classes.title}></div>
      <AboutButtons />
      <AboutMe></AboutMe>
      <AboutCBT></AboutCBT>
    </Fragment>
  );
};

export default About;
