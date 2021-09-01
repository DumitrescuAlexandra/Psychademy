import classes from "./NavigationButtons.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

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
          <Link to="/about" className={classes.nav_btn}>
            About&nbsp;&nbsp;&nbsp;{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/services.svg"} alt={"services"}></img>
          </div>
          <Link to="/Services" className={classes.nav_btn}>
            Services{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/contact.svg"} alt={"contact"}></img>
          </div>
          <Link to="/Contact" className={classes.nav_btn}>
            Contact{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow.svg"} alt={"arrow"}></img>
          </div>
        </div>

        <div className={classes.nav_card} onClick={navHandler}>
          <div className={classes.nav_icon}>
            <img src={"/Images/patient-dark.svg"} alt={"patient"}></img>
          </div>
          <Link to="/PatientLogin" className={classes.nav_btn_dark}>
            {" "}
            Patient login{" "}
          </Link>
          <div className={classes.nav_next}>
            <img src={"/Images/arrow-dark.svg"} alt={"arrow"}></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavigationButtons;
