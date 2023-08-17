// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyDr2uOjJAZToTpbhLhRA4mi2WZnOpW9pwg",
  authDomain: "campusconnect-f66bb.firebaseapp.com",
  projectId: "campusconnect-f66bb",
  storageBucket: "campusconnect-f66bb.appspot.com",
  messagingSenderId: "1001701195817",
  appId: "1:1001701195817:web:1dad80a5e06e961969dc38",
  measurementId: "G-TLF2LNQGRX"
};*/
const firebaseConfig = {
    // Your Firebase app configuration options
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: XXXXXXXXXXXXXXXXXX,
    databaseURL: XXXXXXXXXXXXXXXXXX,
    projectId: XXXXXXXXXXXXXXX,
    storageBucket: XXXXXXXXXXXXXXX,
    messagingSenderId: XXXXXXXXXXXXX,
    appId: ,
    measurementId: "G-M355NDKVJ1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {app, auth, provider}
