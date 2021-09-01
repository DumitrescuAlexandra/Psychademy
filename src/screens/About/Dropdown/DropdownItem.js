import React from "react";
import classes from "./Dropdown.module.css";

function FAQ({ faq, index, toggleFaq }) {
  return (
    <div
      className={`${classes.faq}` + `${faq.open ? ".open" : ""}`}
      key={index}
      onClick={() => toggleFaq(index)}
    >
      <div className={classes.faq_question}>
        {" "}
        {faq.question}{" "}
        {!faq.open && (
          <img
            src={"/Images/downArrow.svg"}
            alt={"down"}
            classname={classes.arrDown}
          ></img>
        )}
        {faq.open && (
          <img
            src={"/Images/upArrow.svg"}
            alt={"down"}
            classname={classes.arrUp}
          ></img>
        )}
      </div>
      <div className={classes.faq_answer}> {faq.answer}</div>
    </div>
  );
}

export default FAQ;
