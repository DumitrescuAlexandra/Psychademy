import React, { useState } from "react";

import classes from "./Services.module.css";
import ServicesCard from "./ServicesCard";

import service1 from "../../Images/service1.svg";
import service2 from "../../Images/service2.svg";
import service3 from "../../Images/service3.svg";
import service4 from "../../Images/service4.svg";

function Services() {
  const [cards, setCards] = useState([
    {
      text: "Individual session",
      imgSrc: `${service1}`,
      altText: "individual",
      client: "adults",
      duration: "50 mins",
      location: "online/office",
      price: "€35/session",
      flip: false,
    },
    {
      text: "Group therapy session",
      imgSrc: `${service2}`,
      altText: "group",
      client: "adults",
      duration: "75 mins",
      location: "office",
      price: "€25/person",
      flip: false,
    },
    {
      text: "Couple therapy session",
      imgSrc: `${service3}`,
      altText: "couple",
      client: "adults",
      duration: "90 mins",
      location: "online/office",
      price: "€30/person",
      flip: false,
    },
    {
      text: "Clinical Evaluation",
      imgSrc: `${service4}`,
      altText: "evaluation",
      client: "adults",
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
