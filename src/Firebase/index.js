import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUSDW-Qits0orb2Mmv7-EC8EAsSpiUZZg",
  authDomain: "psychademy.firebaseapp.com",
  databaseURL:
    "https://psychademy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychademy",
  storageBucket: "psychademy.appspot.com",
  messagingSenderId: "533299724886",
  appId: "1:533299724886:web:96e61a2deee809b8ddb1f7",
  measurementId: "G-W2R59PWC5M",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
