// import React, { useState } from "react";
// import Modal from "react-modal";
// import { useHistory } from "react-router-dom";

// import classes from "./UploadItem.module.css";

// function UploadItem() {
//   const [showModal, setShowModal] = useState(true);
//   const history = useHistory();

//   return (
//     <div classname={classes.homeworkItem}>
//       <div classname={classes.fileImg}>
//         <img src="./Images/fileImg.svg" alt=""></img>
//       </div>
//       <div className={classes.identifier}>
//         <div className={classes.name}>{file.name}</div>
//         <div className={classes.date}>{file.date}</div>
//       </div>
//       <Link to={`files/${url}`}>
//         <img
//           src="/Images/delete.svg/"
//           alt=""
//           onclick={() => {
//             setShowModal(true);
//           }}
//         ></img>
//       </Link>

//       {showModal && (
//         <Modal
//           isOpen={true}
//           className={classes.deleteModalBck}
//           style={{
//             overlay: {
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(28, 28, 28, 0.9)",
//             },
//           }}
//         >
//           <div className={classes.deleteModal}>
//             <img
//               src="/Images/close.svg"
//               alt=""
//               onClick={() => history.push("/Account")}
//             ></img>
//             <p className={classes.modalTitle}> Delete your account</p>
//             <p className={classes.modalText}>
//               {" "}
//               Please note that this action is permanent and all data associated
//               with your account will be erased as well.
//             </p>{" "}
//             <p className={classes.modalText}>
//               {" "}
//               A prior discussion with your therapist is advised.{" "}
//             </p>
//             <div
//               className={classes.modalBtn}
//               onClick={() => setShowModal(false)}
//             >
//               {" "}
//               I understand{" "}
//             </div>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default UploadItem;
