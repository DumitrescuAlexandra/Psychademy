import classes from "./JournalEntryC.module.css";
import { Link } from "react-router-dom";

import journal from "../../../Images/journal.svg";
import open from "../../../Images/open.svg";
import trash from "../../../Images/trash.svg";

const JournalEntry = (props) => {
  const displayedTitle =
    props.title.length > 15 ? props.title.slice(0, 15) + "..." : props.title;

  return (
    <li className={classes.journalEntry}>
      <div className={classes.journalIcon}>
        <img src={journal} alt=""></img>
      </div>
      <div className={classes.entryText}>
        <div className={classes.entryTitle}>
          <p>{displayedTitle}</p>
        </div>
        <div className={classes.entryDate}>
          <p>{props.date}</p>
        </div>
      </div>

      <Link to={`/Journal/${props.id}`} className={classes.viewEntryBtn}>
        <img src={open} alt=""></img>
      </Link>
      <div
        className={classes.deleteEntryBtn}
        onClick={props.deleteEntryHandler}
      >
        <img src={trash} alt=""></img>
      </div>
    </li>
  );
};

export default JournalEntry;
