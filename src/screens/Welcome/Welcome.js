import React, { useState, useEffect } from "react";
import classes from "./Welcome.module.css";

import NavigationButtons from "../../components/MainNavigation/NavigationButtons";
import { useAuth } from "../../contexts/AuthContext";
import welcome from "../../Images/welcomePage.jpg";
import PatientZone from "../../UI/Buttons/PatientZone";

const Welcome = () => {
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
    <div className={classes.welcomePage}>
      {userLogged && <PatientZone />}
      <div className={classes.welcomeImg}>
        <img src={welcome} alt=""></img>
      </div>
      <div className={classes.contents}>
        <div className={classes.hero}>
          <p className={classes.title}> Adapt. Improvise. Overcome.</p>
          <p className={classes.motto}>
            I can help you gain control over your cognitive resources and
            mastercraft your destiny.
          </p>
        </div>
        <NavigationButtons />
      </div>
    </div>
  );
};

export default Welcome;
