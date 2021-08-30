import React, { Fragment } from "react";
import classes from "./AboutCBT.module.css";

import BackArrow from "../../UI/Buttons/BackArrow";
import MobileNavigation from "../../components/MainNavigation/MobileNavigation";

const AboutCBT = () => {
  return (
    <Fragment>
      <BackArrow />
      <MobileNavigation />
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
