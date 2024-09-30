// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optionally, import other Firebase services as needed, e.g.:
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBttnBD_4HnAQINgO4Gef5KU7ftNnMbIVo",
  authDomain: "login-c4717.firebaseapp.com",
  projectId: "login-c4717",
  storageBucket: "login-c4717.appspot.com",
  messagingSenderId: "101203941244",
  appId: "1:101203941244:web:58b7fca597a11e181836f9",
  measurementId: "G-VGDK9JV6BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Optionally initialize other services:
// const db = getFirestore(app);
// const storage = getStorage(app);

export default auth;
