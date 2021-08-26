import classes from "./NavigationButtons.module.css";
// import {Link} from "react-router-dom";
import { Fragment } from "react";

const NavigationButtons = () => {
  return (
    <Fragment>
      <div className={classes.navigation_buttons}>
        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={"/Images/about.svg"} alt={"about"}></img>
          </div>
          <div className={classes.nav_btn}>About&nbsp;&nbsp;&nbsp; </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={"/Images/services.svg"} alt={"services"}></img>
          </div>
          <div className={classes.nav_btn}>Services </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={"/Images/contact.svg"} alt={"contact"}></img>
          </div>
          <div className={classes.nav_btn}>Contact </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={"/Images/patient-dark.svg"} alt={"patient"}></img>
          </div>
          <div className={classes.nav_btn_dark}> Patient zone </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow-dark.svg"} alt={"arrow"}></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavigationButtons;
