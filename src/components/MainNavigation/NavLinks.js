import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./MainNavigation.module.css";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const closeMobileNav = () => props.isMobile && props.closeMobileMenu();

  return (
    <div className={classes.navigationPage}>
      <div className={classes.navigationTitle}>
        <p> Menu </p>
      </div>
      <div className={classes.navLinks}>
        <ul>
          <motion.li
            className={classes.navLink}
            onClick={closeMobileNav}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
          >
            <Link to="/About">About </Link>
          </motion.li>
          <motion.li
            className={classes.navLink}
            onClick={closeMobileNav}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.15 }}
          >
            <Link to="/Services">Services</Link>
          </motion.li>
          <motion.li
            className={classes.navLink}
            onClick={closeMobileNav}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.25 }}
          >
            <Link to="/Contact">Contact</Link>
          </motion.li>
          <div className={classes.ol}></div>
          <motion.li
            className={classes.navLink}
            onClick={closeMobileNav}
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.35 }}
          >
            <Link to="/PatientLogin">Patient Login</Link>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
