import React, { Fragment } from "react";
import classes from "./About.module.css";
import AboutCBT from "./AboutCBT";
import AboutMe from "./AboutMe";

const About = () => {
  return (
    <Fragment>
      <div className={classes.navBar}></div>
      <div className={classes.title}></div>
      <button className={btn_aboutMe}>About me</button>
      <button className={btn_aboutCBT}>About CBT</button>
      <AboutMe></AboutMe>
      <AboutCBT></AboutCBT>
    </Fragment>
  );
};

export default About;
