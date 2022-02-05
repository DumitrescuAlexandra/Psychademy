import React from "react";
import Modal from "react-modal";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import classes from "./Success.module.css";

import close from "../../Images/close.svg";
import check from "../../Images/check.svg";

function Success(props) {
  const history = useHistory();

  return (
    <div className={classes.successPage}>
      <Modal
        isOpen={true}
        ariaHideApp={false}
        className={classes.successModalBck}
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
        <img
          className={classes.closeImg}
          src={close}
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.push(`${props.path}`)}
        ></img>
        <div className={classes.container}>
          <div className={classes.header}>
            <img className={classes.checkImg} src={check} alt=""></img>
          </div>
          <div className={classes.title}>
            <p>Done!</p>
          </div>
          <div className={classes.successMessage}>
            <p>{props.successMessage}</p>
          </div>
          <div className={classes.okayBtn}>
            <Link to={props.path}>Okay</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Success;
