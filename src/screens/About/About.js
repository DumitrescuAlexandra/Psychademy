import React, { Fragment, useState, useEffect } from "react";
import classes from "./About.module.css";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import AboutButtons from "./Buttons";
import BackArrow from "../../UI/Buttons/BackArrow";
import PatientZone from "../../UI/Buttons/PatientZone";

const About = () => {
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
      <div className={classes.aboutPage}>
        <AboutButtons />
      </div>
    </Fragment>
  );
};

export default About;
