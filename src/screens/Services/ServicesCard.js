import React from "react";
import classes from "./Services.module.css";

function ServicesCard({ card, index, toggleCard }) {
  return (
    <div
      className={card.flip ? classes.card_flipped : classes.card}
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
  );
}

export default ServicesCard;
