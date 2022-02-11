import React, { Fragment, useState, useEffect } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import classes from "./Services.module.css";
import { useAuth } from "../../contexts/AuthContext";
import BackArrow from "../../UI/Buttons/BackArrow";
import Services from "./Services";
import ServicesChildren from "./ServicesChildren";
import PatientZone from "../../UI/Buttons/PatientZone";

const ServicesAndFees = (props) => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/welcome");
  };
  const [userLogged, setUserLogged] = useState(false);

  const { getCurrentUserId } = useAuth();

  useEffect(() => {
    let mounted = true;
    setUserLogged(false);
    const checkLogged = () => {
      const userUID = getCurrentUserId();
      if (mounted) {
        userUID !== undefined ? setUserLogged(true) : setUserLogged(false);
      }
    };

    checkLogged();

    return function cleanup() {
      mounted = false;
    };
  }, [getCurrentUserId]);
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      {userLogged && <PatientZone />}
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
            to="/services/adults"
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            Adults
          </NavLink>
          <NavLink
            key={2}
            className={classes.client_inactive}
            to="/services/children"
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            Children
          </NavLink>
        </div>
        <Route path="/services/adults">
          <Services />
        </Route>
        <Route path="/services/children">
          <ServicesChildren />
        </Route>
      </div>
    </Fragment>
  );
};

export default ServicesAndFees;
