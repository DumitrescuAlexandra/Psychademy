import React from "react";
import DeleteModal from "./DeleteModal";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import classes from "./DeleteAccount.module.css";

function DeleteAccount() {
  return (
    <div className={classes.deletePage}>
      <BackArrow />
      <p className={classes.deleteTitle}> Delete Account </p>
      <p className={classes.deleteSubTitle}>
        {" "}
        Please complete the following steps in order to change you password{" "}
      </p>
      <form>
        <div className={classes.deleteControl}>
          <input type="email" id="email" autoComplete="off" required></input>
          <label htmlFor="email" className={classes.labelName}>
            <span className={classes.emailContent}>
              {" "}
              Enter your email Address{" "}
            </span>{" "}
          </label>
        </div>
        <div className={classes.deleteControl}>
          <input name="password" type="password" id="password" required></input>
          <label htmlFor="password" className={classes.labelName}>
            <span className={classes.passwordContent}>
              {" "}
              Enter your password{" "}
            </span>{" "}
          </label>
        </div>
        <div className={classes.deleteAction}>
          <div className={classes.deleteBtn}> Delete my account </div>
        </div>
      </form>

      <DeleteModal />
    </div>
  );
}

export default DeleteAccount;
