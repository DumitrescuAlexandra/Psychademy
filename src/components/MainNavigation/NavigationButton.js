import classes from "./NavigationButton.module.css";
// import {Link} from "react-router-dom";
import { Fragment } from "react";

const NavigationButton = () => {
    return (<Fragment className={classes.card}>
        <div className={classes.icon} />
        <div className={classes.name} />
        <div className={classes.symbol} />
    </Fragment>)
}

export default NavigationButton;