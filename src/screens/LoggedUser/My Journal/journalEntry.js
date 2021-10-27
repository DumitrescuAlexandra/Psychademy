import classes from "./JournalEntry.module.css";
import { Link } from "react-router-dom";

const JournalEntry = (props) => {
  return (
    <li className={classes.journalEntry}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.title}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`} className={classes.viewEntryBtn}>
        <img src="/Images/open.png" alt=""></img>
      </Link>
    </li>
  );
};

export default JournalEntry;
