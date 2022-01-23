// import React from "react";
// import { Link } from "react-router-dom";

// import classes from "./HomeworkItem.module.css";

// function HomeworkItem(props) {
//   const displayedName =
//     props.name.length > 15 ? props.name.slice(0, 15) + "..." : props.name;

//   return (
//     <div classname={classes.homeworkItem}>
//       <div classname={classes.fileImg}>
//         <img src="./Images/fileImg.svg" alt=""></img>
//       </div>
//       <div className={classes.homeworkIdentifier}>
//         <div className={classes.homeworkName}>{displayedName}</div>
//         <div className={classes.homeworkDate}>{props.date}</div>
//       </div>
//       <Link to={`files/${props.url}`} className={classes.downloadHomeworkBtn}>
//         <img src="/Images/download.svg/" alt="" height="24px"></img>
//       </Link>
//     </div>
//   );
// }

// export default HomeworkItem;
