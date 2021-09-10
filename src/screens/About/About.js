import React from "react";
import classes from "./About.module.css";

import AboutButtons from "../../UI/Buttons/Buttons";
import BackArrow from "../../UI/Buttons/BackArrow";

const About = () => {
  return (
    <div className={classes.aboutPage}>
      <BackArrow />
      <AboutButtons />
    </div>
  );
};

export default About;
