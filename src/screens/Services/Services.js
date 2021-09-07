import React, { useState } from "react";

import classes from "./Services.module.css";
import ServicesCard from "./ServicesCard";

function Services() {
  const [cards, setCards] = useState([
    {
      text: "Individual therapy session",
      imgSrc: "/Images/service1.svg",
      altText: "individual",
      patient: "Adult",
      duration: "50 mins",
      location: "online/office",
      price: "€35/session",
      flip: false,
    },
    {
      text: "Group therapy session",
      imgSrc: "/Images/service2.svg",
      altText: "group",
      patient: "Adult",
      duration: "75 mins",
      location: "office",
      price: "€25/person",
      flip: false,
    },
    {
      text: "Couple therapy session",
      imgSrc: "/Images/service3.svg",
      altText: "couple",
      patient: "Adult",
      duration: "90 mins",
      location: "online/office",
      price: "€30/person",
      flip: false,
    },
    {
      text: "Clinical Psychological evaluation",
      imgSrc: "/Images/service4.svg",
      altText: "evaluation",
      patient: "Adult",
      duration: "120 mins",
      location: "office",
      price: "€75/session",
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

export default Services;
