import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import FAQ from "./DropdownItem";

function Dropdown() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is CBT?",
      answer:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
      open: false,
    },
    {
      question: "What are the key concepts of CBT?",
      answer:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
      open: false,
    },
    {
      question: "How long does it take to complete CBT treatment",
      answer:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
      open: false,
    },
    {
      question: "Which patients benefit the most from CBT?",
      answer:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
      open: false,
    },
    {
      question: "What is the goal of psychological evaluation?",
      answer:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapeutic treatment that helps people learn how to identify and change destructive or disturbing thought patterns that have a negative influence on behavior and emotions. The benefits of CBT have been championed by psychologists for decades. But now, new research suggests that CBT can not only change our thought patterns, it can literally rewire our brains!",
      open: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className={classes.faqs}>
      {faqs.map((faq, i) => {
        return <FAQ faq={faq} index={i} key={i} toggleFaq={toggleFaq} />;
      })}
    </div>
  );
}

export default Dropdown;
