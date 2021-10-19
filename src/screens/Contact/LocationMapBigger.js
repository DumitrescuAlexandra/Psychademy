import React from "react";
import classes from "./LocationMap.module.css";

function LocationMapBigger() {
  return (
    <div className={classes.LocationMapBigger}>
      <iframe
        title="Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.7344328920785!2d23.59059831585097!3d46.77013085337564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c279e5b4909%3A0x2a77c2ba4108465b!2sBulevardul%20Eroilor%2017%2C%20Cluj-Napoca%20400000!5e0!3m2!1sro!2sro!4v1631117828569!5m2!1sro!2sro"
        width="600"
        center="true"
        height="360"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default LocationMapBigger;
