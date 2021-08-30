import classes from "./NavigationButtons.module.css";
// import {Link} from "react-router-dom";
import { Fragment } from "react";

const DUMMY_BUTTONS = [
  {
    title: "About",
    iconSrc: "/Images/about.svg",
    leadsTo: "/About",
    arrow: "/Images/arrow.svg",
  },
  {
    title: "Services",
    iconSrc: "/Images/services.svg",
    leadsTo: "/Services",
    arrow: "/Images/arrow.svg",
  },
  {
    title: "Contact",
    iconSrc: "/Images/contact.svg",
    leadsTo: "/Contact",
    arrow: "/Images/arrow.svg",
  },
  {
    title: "Services",
    iconSrc: "/Images/services.svg",
    leadsTo: "/Services",
    arrow: "/Images/arrow.svg",
  },
  {
    title: "Patient login",
    iconSrc: "/Images/patient-dark.svg",
    leadsTo: "/PatientLogin",
    arrow: "/Images/arrow-dark.svg",
  },
];

const NavigationButtons = (props) => {
  const navHandler = () => {
    console.log("Click happened!");
  };

  return (
    <Fragment>
      <div className={classes.navigation_buttons}>
        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/about.svg"} alt={"about"}></img>
          </div>
          <div className={classes.nav_btn}>About&nbsp;&nbsp;&nbsp; </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/services.svg"} alt={"services"}></img>
          </div>
          <div className={classes.nav_btn}>Services </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/contact.svg"} alt={"contact"}></img>
          </div>
          <div className={classes.nav_btn}>Contact </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/patient-dark.svg"} alt={"patient"}></img>
          </div>
          <div className={classes.nav_btn_dark}> Patient login </div>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow-dark.svg"} alt={"arrow"}></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavigationButtons;
