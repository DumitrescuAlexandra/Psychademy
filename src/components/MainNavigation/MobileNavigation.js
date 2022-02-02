import React, { useState } from "react";
import Modal from "react-modal";
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
      size="36px"
      color="#FFF8E1"
      onClick={menuHandler}
    />
  );
  const closeIcon = (
    <RiCloseLine
      className={classes.hamburger}
      size="36px"
      color="#FFF8E1"
      onClick={menuHandler}
    />
  );

  const closeMobileMenu = () => setShowMenu(false);

  return (
    <nav className={classes.mobileNavigation}>
      <p className={classes.brand} onClick={logoHandler}>
        {" "}
        PSYCHADEMY{" "}
      </p>
      {showMenu ? closeIcon : hamburgerIcon}
      {showMenu && (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          className={classes.navigationModalBck}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(28, 28, 28, 0.9)",
            },
          }}
        >
          <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        </Modal>
      )}
    </nav>
  );
};

export default MobileNavigation;
