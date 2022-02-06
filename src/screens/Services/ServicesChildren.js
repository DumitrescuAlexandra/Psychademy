import React, { useState } from "react";
import classes from "./Services.module.css";
import ServicesCard from "./ServicesCard";

import service1 from "../../Images/service1.svg";
import service4 from "../../Images/service4.svg";

function ServicesChildren() {
  const [cards, setCards] = useState([
    {
      text: "Individual session",
      imgSrc: `${service1}`,
      altText: "individual",
      client: "children",
      duration: "30-45 mins",
      location: "office",
      price: "€30/session",
      flip: false,
    },
    {
      text: "Clinical Evaluation",
      imgSrc: `${service4}`,
      altText: "individual",
      client: "children",
      duration: "30-90 mins",
      location: "office",
      price: "€35-75",
      flip: false,
    },
  ]);

  const toggleCard = (index) => {
    setCards(
      cards.map((card, i) => {
        if (i === index) {
          card.flip = !card.flip;
        } else {
          card.flip = false;
        }

        return card;
      })
    );
  };

  return (
    <div className={classes.cards}>
      {cards.map((card, i) => {
        return (
          <ServicesCard card={card} index={i} toggleCard={toggleCard} key={i} />
        );
      })}
    </div>
  );
}

export default ServicesChildren;
