import React, { useState } from "react";

import classes from "./Services.module.css";
import ServicesCard from "./ServicesCard";

function Services() {
  const [cards, setCards] = useState([
    {
      text: "Individual therapy session",
      imgSrc: "/Images/service1.svg",
      altText: "individual",
      client: "Adults",
      duration: "50 mins",
      location: "online/office",
      price: "€35/session",
      flip: false,
    },
    {
      text: "Group therapy session",
      imgSrc: "/Images/service2.svg",
      altText: "group",
      client: "Adults",
      duration: "75 mins",
      location: "office",
      price: "€25/person",
      flip: false,
    },
    {
      text: "Couple therapy session",
      imgSrc: "/Images/service3.svg",
      altText: "couple",
      client: "Adults",
      duration: "90 mins",
      location: "online/office",
      price: "€30/person",
      flip: false,
    },
    {
      text: "Clinical Psychological evaluation",
      imgSrc: "/Images/service4.svg",
      altText: "evaluation",
      client: "Adults",
      duration: "120 mins",
      location: "office",
      price: "€75/session",
      flip: false,
    },
    {
      text: "Individual therapy session",
      imgSrc: "/Images/service1.svg",
      altText: "individual",
      client: "Children",
      duration: "30-45 mins",
      location: "office",
      price: "€30/session",
      flip: false,
    },
    {
      text: "Clinical Psychological evaluation",
      imgSrc: "/Images/service4.svg",
      altText: "individual",
      client: "Children",
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

export default Services;
