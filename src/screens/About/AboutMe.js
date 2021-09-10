import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes.therapistPage}>
      <div className={classes.therapist}>
        <div className={classes.therapistCard}>
          <img src={"/Images/therapist.jpg"} alt={"profile"}></img>
          <div className={classes.vl}></div>
          <p className={classes.therapistName}>
            {" "}
            Ciprian Pertea{" "}
            <span className={classes.profession}>Psychotherapist</span>
          </p>
        </div>

        <div className={classes.theStory}>
          <p>
            Not to “toot my own horn,” but I’ve been told on more than one
            occasion that I make the best scrambled eggs in the history of
            scrambled eggs. I’ve been refining my scrambling method since junior
            high school home economics class… do they even offer that class
            anymore?… where I first learned how to pull the cooking edges from
            the outside in (details below). This simple tip, along with a few
            others I’ve learned along the way, have developed into a foolproof
            method for a scrumptious scramble every time.
          </p>
          <p>
            We eat scrambled eggs almost every morning for breakfast, so I’ve
            had plenty time to refine the technique. I’m excited to share it
            with you! “Everybody knows how to scramble eggs,” you might think.
            True, anybody can scramble eggs, but making a fluffy, moist scramble
            is a bit of an art form. I really loathe overcooked, rubbery or
            browned eggs. So many diners and delis serve them this way, which
            means I rarely go out for breakfast anymore.
          </p>
          <p>
            Why should I, when it’s perfectly easy (and way less expensive) to
            make tasty eggs at home? Here’s how! A method for cooking fluffy,
            moist, flavorful and evenly cooked scrambled eggs. Get great results
            every time with a few simple tips.
          </p>
        </div>

        <div className={classes.aboutMe}>
          <p>
            {" "}
            Educational <span>background</span>
          </p>
        </div>

        <div className={classes.backgroundEd}>
          <div className={classes.edField}>
            <img src={"/Images/masters.svg"} alt={"master"}></img>
            <p>
              {" "}
              Master's degree in Clinical Psychology, Psychological Counseling
              and Psychotherapy, Babeș-Bolyai University
            </p>
          </div>
          <div className={classes.edField}>
            <img src={"/Images/bachelors.svg"} alt={"bachelors"}></img>
            <p>
              {" "}
              Bachelor's degree in Psychology, Transilvania University of Brașov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
