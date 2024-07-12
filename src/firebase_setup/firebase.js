// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQj0oeQo6_X25g2IheQKfZzaq5jPppPns",
  authDomain: "hackaton-1669b.firebaseapp.com",
  projectId: "hackaton-1669b",
  storageBucket: "hackaton-1669b.appspot.com",
  databaseURL:
    "https://hackaton-1669b-default-rtdb.europe-west1.firebasedatabase.app",

  messagingSenderId: "835128030394",
  appId: "1:835128030394:web:f67c685fe7366face2fe83",
  measurementId: "G-D2KFP96FGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // Use getFirestore to initialize Firestore

// No need for the following lines as the app is already initialized above
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // If already initialized, use that one
// }

// Correct way to export the Firestore instance
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // If already initialized, use that one
}
export { db };
