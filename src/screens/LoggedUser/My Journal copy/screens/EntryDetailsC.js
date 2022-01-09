import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import classes from "./EntryDetailsC.module.css";
import DetailedEntry from "../DetailedEntryC";

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
        <DetailedEntry
          key={props.id}
          title={props.title}
          date={props.date}
          message={props.message}
        />
      </Modal>
    </div>
  );
};

export default EntryDetails;
