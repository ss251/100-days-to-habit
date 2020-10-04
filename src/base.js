import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5RdlFizqrJBtf_djzyCgYV7vI3-QkCJw",
  authDomain: "days-to-habit.firebaseapp.com",
  databaseURL: "https://days-to-habit.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;
