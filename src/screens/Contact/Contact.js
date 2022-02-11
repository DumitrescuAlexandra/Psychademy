import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Contact.module.css";
import LocationMap from "./LocationMap";
import BackArrow from "../../UI/Buttons/BackArrow";
import LocationMapBigger from "./LocationMapBigger";

import whapp from "../../Images/whapp.svg";
import mail from "../../Images/mail.svg";
import schedule from "../../Images/schedule.svg";
import gps from "../../Images/gps.svg";
import PatientZone from "../../UI/Buttons/PatientZone";

const Contact = () => {
  const history = useHistory();
  const backHandler = () => {
    history.push("/welcome");
  };
  return (
    <Fragment>
      <BackArrow backHandler={backHandler} />
      <PatientZone />
      <div className={classes.contactPage}>
        <p className={classes.contactTitle}> Contact </p>

        <div className={classes.contactWritten}>
          <p className={classes.write}> Write me anytime </p>
          <div className={classes.whapp}>
            <img src={whapp} alt="whapp"></img>
            <p className={classes.contactWhatsapp}> 0723. 231. 231 </p>
          </div>
          <div className={classes.mail}>
            <img src={mail} alt="mail"></img>
            <p className={classes.contactMail}> the.rapist@psychademy.com </p>
          </div>
        </div>

        <div className={classes.contactLive}>
          <p className={classes.write}> Let's meet </p>
          <div className={classes.schedule}>
            <img src={schedule} alt="schedule"></img>
            <p className={classes.contactSchedule}>
              {" "}
              Mon - Fri: &nbsp;12:00-20:00{" "}
            </p>
          </div>
          <div className={classes.gps}>
            <img src={gps} alt="gps"></img>
            <p className={classes.contactLocation}>
              {" "}
              Blvd. Eroilor, Nr. 17, Cluj-Napoca{" "}
            </p>
          </div>
        </div>
        <div className={classes.location}>
          <LocationMap />
        </div>
        <div className={classes.locationBigger}>
          <LocationMapBigger />
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
