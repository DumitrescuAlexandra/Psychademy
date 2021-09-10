import React from "react";
import classes from "./About.module.css";

import AboutButtons from "../../UI/Buttons/Buttons";

const About = () => {
  return (
    <div className={classes.aboutPage}>
      <AboutButtons />
    </div>
  );
};

export default About;
