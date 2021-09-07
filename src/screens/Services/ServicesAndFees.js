import React from "react";
import { Link } from "react-router-dom";
import classes from "./Services.module.css";
import BackArrow from "../../UI/Buttons/BackArrow";
import Services from "./Services";

const ServicesAndFees = () => {
  const pacientTypeHandler = () => {
    console.log("Patient type changed!");
  };

  return (
    <div className={classes.servicesAndFees}>
      <BackArrow />
      <p className={classes.title}>
        {" "}
        Services <span>and fees</span>
      </p>
      <p className={classes.subTitle}>
        For appointments, prease visit the <a href="/contact">contact</a>{" "}
        section
      </p>
      <div className={classes.patientType}>
        <Link
          className={classes.btn_adults}
          to="/services/adults"
          exact
          onClick={pacientTypeHandler}
        >
          {" "}
          Adults
        </Link>
        <Link
          className={classes.btn_children}
          to="/services/children"
          exact
          onClick={pacientTypeHandler}
        >
          {" "}
          Children
        </Link>
        <Services />
      </div>
    </div>
  );
};

export default ServicesAndFees;
