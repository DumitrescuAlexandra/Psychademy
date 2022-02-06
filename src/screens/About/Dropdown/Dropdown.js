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
      "CBT is a treatment approach that provides us with a way of understanding our experience of the world, enabling us to make changes if we need to. It does this by dividing our experience into four central components: thoughts (cognitions), feelings (emotions), behaviors and physiology (your biology).",
  },
  {
    question: "How long does it take to complete CBT treatment?",
    answer:
      "Research shows that CBT is the most effective form of treatment for those coping with depression and anxiety. CBT alone is 50-75% effective for overcoming depression and anxiety after 5 – 15 modules",
  },
  {
    question: "Which patients benefit the most from CBT?",
    answer:
      "A typical course of CBT ranges between six and twelve sessions. Because it is a relatively short therapeutic intervention, CBT has been proven highly efficient for anxiety disorders, depression, phobias, insomnia, eating disorders, and other mental health challenges.",
  },
  {
    question: "What is the goal of psychological evaluation?",
    answer:
      "The goals of psychological assessment are to better understand a person's strengths and weaknesses, identify potential problems with cognitions, emotional reactivity, and make recommendations for treatment/remediation.",
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
