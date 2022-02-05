import React, { useState } from "react";
import classes from "./Dropdown.module.css";

import downArrow from "../../../Images/downArrow.svg";
import upArrow from "../../../Images/upArrow.svg";

const DROPDOWN_DATA = [
  {
    question: "What is CBT?",
    answer:
      "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
  },
  {
    question: "What are the key concepts of CBT?",
    answer:
      "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
  },
  {
    question: "How long does it take to complete CBT treatment",
    answer:
      "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
  },
  {
    question: "Which patients benefit the most from CBT?",
    answer:
      "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
  },
  {
    question: "What is the goal of psychological evaluation?",
    answer:
      "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
  },
];

function Dropdown() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className={classes.faqs}>
      <div className={classes.faq}>
        {DROPDOWN_DATA.map((item, index) => {
          return (
            <>
              <div
                className={classes.faq_question}
                onClick={() => toggle(index)}
                key={index}
              >
                <p> {item.question} </p>
                <span>
                  {clicked === index ? (
                    <img src={upArrow} alt="" />
                  ) : (
                    <img src={downArrow} alt="" />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className={classes.faq_answer}>
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
