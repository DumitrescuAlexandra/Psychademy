import { useHistory, Link } from "react-router-dom";
import Modal from "react-modal";
import classes from "./EntryDetailsC.module.css";
// import DetailedEntry from "../DetailedEntryC";

const EntryDetails = (props) => {
  const history = useHistory();

  return (
    <div className={classes.detailsPage}>
      <Modal
        isOpen={true}
        className={classes.entryModalBck}
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
          src="/Images/close.svg"
          alt=""
          height="28px"
          width="28px"
          onClick={() => history.push("/Journal")}
        ></img>
        <div className={classes.entryPage}>
          <div className={classes.entry}>
            <div className={classes.banner}>
              <div className={classes.title}>
                <p>{props.title}</p>
              </div>
              <div className={classes.date}>
                {" "}
                <p>{props.date}</p>
              </div>
              <div className={classes.message}>
                <p>{props.message}</p>
              </div>
            </div>
            <Link to="/Journal"> Back </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EntryDetails;
