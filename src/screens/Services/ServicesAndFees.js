import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Services.module.css";
import BackArrow from "../../UI/Buttons/BackArrow";
import Services from "./Services";

function ServicesAndFees() {
  const [client, setClient] = useState({
    activeClient: null,
    clients: [
      { name: "Adults", type: "adult", path: "/services/adults" },
      { name: "Children", type: "child", path: "/services/children" },
    ],
  });

  const toggleClientHandler = (i) => {
    setClient({ ...client, activeClient: client.clients[i] });
  };

  const toggleClientClass = (i) => {
    if (client.clients[i] === client.activeClient) {
      return classes.client_active;
    } else {
      return classes.client_inactive;
    }
  };

  return (
    <div className={classes.servicesAndFees}>
      <BackArrow />
      <p className={classes.title}>
        Services <span>and fees</span>
      </p>
      <p className={classes.subTitle}>
        For appointments, please visit the <a href="/contact">contact </a>
        &nbsp; section
      </p>
      <div className={classes.clientType}>
        {client.clients.map((el, i) => (
          <NavLink
            key={i}
            className={toggleClientClass(i)}
            onClick={toggleClientHandler}
            to={client.clients[i].path}
            activeStyle={{ background: "#78ddb1", color: "#074343" }}
          >
            {client.clients[i].name}
          </NavLink>
        ))}
      </div>
      <Services />
    </div>
  );
}

// const ServicesAndFees = (props) => {
//   const [client, setClient] = useState();

//   const clientTypeHandler = () => {
//     console.log("client type changed!");
//     setClient(!client);
//   };

//   return (
//     <div className={classes.servicesAndFees}>
//       <BackArrow />
//       <p className={classes.title}>
//         {" "}
//         Services <span>and fees</span>
//       </p>
//       <p className={classes.subTitle}>
//         For appointments, prease visit the <a href="/contact">contact</a>{" "}
//         section
//       </p>
//       <div className={classes.clientType}>
//         <Link
//           className={classes.btn_adults}
//           to="/services/adults"
//           exact
//           onClick={clientTypeHandler}
//         >
//           {" "}
//           Adults
//         </Link>
//         <Link
//           className={classes.btn_children}
//           to="/services/children"
//           exact
//           onClick={clientTypeHandler}
//         >
//           {" "}
//           Children
//         </Link>
//       </div>
//       <Services />
//     </div>
//   );
// };

export default ServicesAndFees;
