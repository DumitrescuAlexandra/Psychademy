import React from "react";
import classes from "./Services.module.css";

function ServicesCard({ card, index, toggleCard }) {
  return (
    <div className={classes.cardContainer}>
      {!card.flip && (
        <div
          className={classes.card}
          key={index}
          onClick={() => toggleCard(index)}
        >
          <div className={classes.card_text}> {card.text} </div>
          <div>
            <img
              className={classes.serviceIcon}
              src={card.imgSrc}
              alt={card.altText}
            ></img>
          </div>
        </div>
      )}
      {card.flip && (
        <div
          className={classes.card_flipped}
          key={index}
          onClick={() => toggleCard(index)}
        >
          <div className={classes.miniCard}>
            <div className={classes.miniCard_text}> Duration </div>
            <img
              className={classes.miniIcon}
              src="/Images/duration.svg"
              alt="duration"
            ></img>
            <div className={classes.miniCard_specifics}>{card.duration}</div>
          </div>

          <div className={classes.miniCard}>
            <div className={classes.miniCard_text}> Location </div>
            <img
              className={classes.miniIcon}
              src="/Images/location.svg"
              alt="location"
            ></img>
            <div className={classes.miniCard_specifics}>{card.location}</div>
          </div>

          <div className={classes.miniCard}>
            <div className={classes.miniCard_text}> Price </div>
            <img
              className={classes.miniIcon}
              src="/Images/price.svg"
              alt="price"
            ></img>
            <div className={classes.miniCard_specifics}>{card.price}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesCard;
