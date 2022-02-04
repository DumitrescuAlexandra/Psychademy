import React from "react";
import Modal from "react-modal";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import classes from "./OperationFailed.module.css";

function OperationFailed(props) {
  const history = useHistory();

  return (
    <div className={classes.failPage}>
      <Modal
        isOpen={true}
        ariaHideApp={false}
        className={classes.failModalBck}
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
          src="/Images/close.svg"
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.push(`${props.path}`)}
        ></img>
        <div className={classes.container}>
          <div className={classes.header}>
            <img
              className={classes.checkImg}
              src="/Images/fail.svg"
              alt=""
            ></img>
          </div>
          <div className={classes.title}>
            <p>Oooops!</p>
          </div>
          <div className={classes.failMessage}>
            <p>{props.failMessage}</p>
          </div>
          <div className={classes.okayBtn}>
            <Link to={props.path}>Go back</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default OperationFailed;
