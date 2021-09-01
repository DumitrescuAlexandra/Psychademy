import React from "react";
import classes from "./AboutCBT.module.css";

import BackArrow from "../../UI/Buttons/BackArrow";
import MobileNavigation from "../../components/MainNavigation/MobileNavigation";
import Dropdown from "./Dropdown/Dropdown";

const AboutCBT = () => {
  return (
    <div className={classes.aboutCBT}>
      <BackArrow />
      <MobileNavigation />
      <Dropdown />
    </div>
  );
};

export default AboutCBT;
