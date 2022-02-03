import React, { Fragment } from "react";
import classes from "./About.module.css";
import { useHistory } from "react-router-dom";
import AboutButtons from "./Buttons";
import BackArrow from "../../UI/Buttons/BackArrow";

const About = () => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/welcome");
  };
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <div className={classes.aboutPage}>
        <AboutButtons />
      </div>
    </Fragment>
  );
};

export default About;
