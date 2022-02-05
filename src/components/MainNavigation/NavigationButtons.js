import classes from "./NavigationButtons.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import about from "../../Images/about.svg";
import arrow from "../../Images/arrow.svg";
import services from "../../Images/services.svg";
import contact from "../../Images/contact.svg";
import patientDark from "../../Images/patient-dark.svg";
import arrowDark from "../../Images/arrow-dark.svg";

const NavigationButtons = () => {
  return (
    <Fragment>
      <div className={classes.navigation_buttons}>
        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={about} alt={"about"}></img>
          </div>
          <Link to="/about" className={classes.nav_btn}>
            About&nbsp;&nbsp;&nbsp;{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={arrow} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={services} alt={"services"}></img>
          </div>
          <Link to="/Services" className={classes.nav_btn}>
            Services{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={arrow} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={contact} alt={"contact"}></img>
          </div>
          <Link to="/Contact" className={classes.nav_btn}>
            Contact{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={arrow} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card}>
          <div className={classes.nav_icon}>
            <img src={patientDark} alt={"patient"}></img>
          </div>
          <Link to="/PatientLogin" className={classes.nav_btn_dark}>
            {" "}
            Patient login{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={arrowDark} alt={"arrow"}></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavigationButtons;
