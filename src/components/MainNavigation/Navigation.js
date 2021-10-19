import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={classes.pcNav}>
        <NavLink
          to="/welcome"
          activeStyle={{
            borderBottom: "2px solid #0CC072",
            paddingBottom: "0.5rem",
            color: "#0CC072",
          }}
        >
          Home
        </NavLink>
      </div>

      <div className={classes.pcNav}>
        <NavLink
          to="/About"
          activeStyle={{
            borderBottom: "2px solid #0CC072",
            paddingBottom: "0.5rem",
            color: "#0CC072",
          }}
        >
          About
        </NavLink>
      </div>

      <div className={classes.pcNav}>
        <NavLink
          to="/Services"
          activeStyle={{
            borderBottom: "2px solid #0CC072",
            paddingBottom: "0.5rem",
            color: "#0CC072",
          }}
        >
          Services
        </NavLink>
      </div>

      <div className={classes.pcNav}>
        <NavLink
          to="/Contact"
          activeStyle={{
            borderBottom: "2px solid #0CC072",
            paddingBottom: "0.5rem",
            color: "#0CC072",
          }}
        >
          Contact
        </NavLink>
      </div>

      <div className={classes.autNav}>
        <NavLink
          to="/PatientLogin"
          activeStyle={{
            border: "2px solid #0CC072",
            paddingBottom: "0.5rem",
            color: "#0CC072",
          }}
          className={classes.authNavi}
        >
          Authentication
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
