import React, { useState } from "react";

import classes from "./Services.module.css";
import ServicesCard from "./ServicesCard";

function Services() {
  const [cards, setCards] = useState([
    {
      text: "Individual therapy session",
      imgSrc: "/Images/service1.svg",
      altText: "individual",
      flip: false,
    },
    {
      text: "Group therapy session",
      imgSrc: "/Images/service2.svg",
      altText: "group",
      flip: false,
    },
    {
      text: "Couple therapy session",
      imgSrc: "/Images/service3.svg",
      altText: "couple",
      flip: false,
    },
    {
      text: "Clinical Psychological evaluation",
      imgSrc: "/Images/service4.svg",
      altText: "evaluation",
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
