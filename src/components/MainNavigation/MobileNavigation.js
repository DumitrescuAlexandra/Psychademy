import React, { useState } from "react";
import { useHistory } from "react-router";

import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";

import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const MobileNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  const logoHandler = () => {
    history.push("/welcome");
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
      <p className={classes.brand} onClick={logoHandler}>
        {" "}
        PSYCHADEMY{" "}
      </p>
      {showMenu ? closeIcon : hamburgerIcon}
      {showMenu && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
