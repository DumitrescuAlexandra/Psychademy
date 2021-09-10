import React from "react";
import classes from "./Dropdown.module.css";

function FAQ({ faq, index, toggleFaq }) {
  return (
    <div
      className={faq.open ? classes.faq_open : classes.faq}
      key={index}
      onClick={() => toggleFaq(index)}
    >
      <div className={classes.faq_question}>
        {" "}
        {faq.question}{" "}
        {!faq.open && <img src={"/Images/downArrow.svg"} alt={"down"}></img>}
        {faq.open && <img src={"/Images/upArrow.svg"} alt={"up"}></img>}
      </div>

      <div className={classes.faq_answer}> {faq.answer}</div>
    </div>
  );
}

export default FAQ;
