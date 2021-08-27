import React, { Fragment } from "react";
import classes from "./AboutCBT.module.css";

const AboutCBT = () => {
  return (
    <Fragment>
      <div className={classes.aboutTitle}></div>
      <div className={classes.dropdownItem}>
        <div className={classes.dropdownFAQ}></div>
        <div className={classes.dropdownAnswer}></div>
      </div>
      <div className={classes.dropdownItem}>
        <div className={classes.dropdownFAQ}></div>
        <div className={classes.dropdownAnswer}></div>
      </div>
      <div className={classes.dropdownItem}>
        <div className={classes.dropdownFAQ}></div>
        <div className={classes.dropdownAnswer}></div>
      </div>
      <div className={classes.dropdownItem}>
        <div className={classes.dropdownFAQ}></div>
        <div className={classes.dropdownAnswer}></div>
      </div>
      <div className={classes.dropdownItem}>
        <div className={classes.dropdownFAQ}></div>
        <div className={classes.dropdownAnswer}></div>
      </div>
    </Fragment>
  );
};

export default AboutCBT;
