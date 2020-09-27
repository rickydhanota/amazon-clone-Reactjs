// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBvAv237DAgMJQu38BZLU7m4VA8TLqvOkg",
    authDomain: "clone-5e38d.firebaseapp.com",
    databaseURL: "https://clone-5e38d.firebaseio.com",
    projectId: "clone-5e38d",
    storageBucket: "clone-5e38d.appspot.com",
    messagingSenderId: "716277565799",
    appId: "1:716277565799:web:dbe1ea42f056729f3947c2",
    measurementId: "G-F07TBC78TB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth}