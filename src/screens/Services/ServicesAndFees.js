import React, { Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import classes from "./Services.module.css";
import BackArrow from "../../UI/Buttons/BackArrow";
import Services from "./Services";

const ServicesAndFees = (props) => {
  const params = useParams();

  console.log(params.clientType);

  return (
    <Fragment>
      <BackArrow />
      <div className={classes.servicesAndFees}>
        <div className={classes.servicesTitle}>
          <p className={classes.title}>
            Services <span>and fees</span>
          </p>

          <p className={classes.subTitle}>
            For appointments, please visit the &nbsp;{" "}
            <a href="/contact"> contact</a>
            &nbsp; section
          </p>
        </div>
        <div className={classes.clientType}>
          <NavLink
            key={1}
            className={classes.client_inactive}
            to={`/services/adults`}
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            Adults
          </NavLink>
          <NavLink
            key={2}
            className={classes.client_inactive}
            to={`/services/children`}
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            Children
          </NavLink>
        </div>

        <Services />
      </div>
    </Fragment>
  );
};

export default ServicesAndFees;
