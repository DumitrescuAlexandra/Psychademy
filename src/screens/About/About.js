import React, { Fragment } from "react";
import classes from "./About.module.css";

import AboutButtons from "./Buttons";
import BackArrow from "../../UI/Buttons/BackArrow";

const About = () => {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.aboutPage}>
        <AboutButtons />
      </div>
    </Fragment>
  );
};

export default About;
