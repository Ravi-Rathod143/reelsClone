// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaHInR_1Y51i5m6WFXYMwemZDlYKcCK2I",
  authDomain: "insta-reels-14a3a.firebaseapp.com",
  projectId: "insta-reels-14a3a",
  storageBucket: "insta-reels-14a3a.appspot.com",
  messagingSenderId: "164453200857",
  appId: "1:164453200857:web:d5c43f4537636e24a8dfc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export {auth}
