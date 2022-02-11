import React, { Fragment } from "react";
import classes from "./About.module.css";
import { useHistory } from "react-router-dom";
import AboutButtons from "./Buttons";
import BackArrow from "../../UI/Buttons/BackArrow";
import PatientZone from "../../UI/Buttons/PatientZone";

const About = () => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/welcome");
  };
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <PatientZone />
      <div className={classes.aboutPage}>
        <AboutButtons />
      </div>
    </Fragment>
  );
};

export default About;
