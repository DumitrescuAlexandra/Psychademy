import classes from "./JournalEntry.module.css";
import { Link } from "react-router-dom";

const JournalEntry = (props) => {
  return (
    <li className={classes.journalEntry}>
      <figure>
        <figcaption>{props.title}</figcaption>
        <blockquote>
          <p>{props.message}</p>
        </blockquote>
      </figure>
      <Link to={`/Journal/${props.id}`} className={classes.viewEntryBtn}>
        <img src="/Images/open.png" alt=""></img>
      </Link>
    </li>
  );
};

export default JournalEntry;
