import classes from "./JournalEntry.module.css";
import { Link } from "react-router-dom";

const JournalEntry = (props) => {
  const displayedTitle = props.message.slice(0, 15) + "...";

  return (
    <li className={classes.journalEntry}>
      <div className={classes.journalIcon}>
        <img src="/Images/journal.svg" alt=""></img>
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
        <img src="/Images/open.png" alt="" height="24px"></img>
      </Link>
    </li>
  );
};

export default JournalEntry;
