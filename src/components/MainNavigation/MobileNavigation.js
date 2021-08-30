import React, { useState } from "react";

import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";

import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const hamburgerIcon = (
    <RiMenu3Line
      className={classes.hamburger}
      size="24px"
      color="#FFF8E1"
      onClick={menuHandler}
    />
  );
  const closeIcon = (
    <RiCloseLine
      className={classes.hamburger}
      size="24px"
      color="#FFF8E1"
      onClick={menuHandler}
    />
  );

  return (
    <nav className={classes.mobileNavigation}>
      <span className={classes.brand}> CIPRIAN PERTEA </span>
      {showMenu ? closeIcon : hamburgerIcon}
      {showMenu && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
