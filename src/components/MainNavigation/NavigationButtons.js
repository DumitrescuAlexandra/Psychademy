import classes from "./NavigationButtons.module.css";
// import {Link} from "react-router-dom";
import { Fragment } from "react";

const NavigationButtons = () => {
    return (
    <Fragment>
        <div >
        <button className={classes.nav_btn}> About </button>
        </div>
    </Fragment>)
}

export default NavigationButtons;