import { Link } from "react-router-dom";
import classes from "./Buttons.module.css";

const AboutButtons = () => {
  const showAboutHandler = (event) => {
    // event.preventDefault();
    console.log("Activated!");
  };

  return (
    <div className={classes.aboutBtn}>
      <Link
        className={classes.btn_aboutMe}
        to="/about/aboutMe"
        exact
        onClick={showAboutHandler}
      >
        {" "}
        About Me
      </Link>

      <Link
        className={classes.btn_aboutCBT}
        to="/about/aboutCBT"
        exact
        onClick={showAboutHandler}
      >
        {" "}
        About CBT
      </Link>
    </div>
  );
};

export default AboutButtons;
