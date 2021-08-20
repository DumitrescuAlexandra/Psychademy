import React, {useState} from "react";

import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";

import {RiMenu3Line} from "react-icons/ri";
import {RiCloseLine} from "react-icons/ri"




const MobileNavigation = () => {
const [showMenu, setShowMenu] = useState(false);

const menuHandler = () => {
    setShowMenu(!showMenu);
}

const hamburgerIcon = <RiMenu3Line className={classes.Hamburger}  onClick={menuHandler}/>
const closeIcon = <RiCloseLine className={classes.Hamburger} onClick={menuHandler}/>



    return(
    <nav className={classes.MobileNavigation}>
        {showMenu ? closeIcon : hamburgerIcon}
        {showMenu && <NavLinks /> }
    </nav>);
}

export default MobileNavigation;