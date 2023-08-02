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
    apiKey: "AIzaSyDbloeJNjdhU840mPSdQiYaIJkKWCMKOI4",
    authDomain: "alu-hackathon.firebaseapp.com",
    databaseURL: "https://alu-hackathon-default-rtdb.firebaseio.com",
    projectId: "alu-hackathon",
    storageBucket: "alu-hackathon.appspot.com",
    messagingSenderId: "903657003269",
    appId: "1:903657003269:web:cdf7eb75098b7aea6ebf6c",
    measurementId: "G-M355NDKVJ1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}