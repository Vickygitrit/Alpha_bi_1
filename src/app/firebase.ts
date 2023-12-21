import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXrO1C2SnA1tgwNj-q0LJn2rApp9StXLs",
  authDomain: "alphabi-2ec3d.firebaseapp.com",
  projectId: "alphabi-2ec3d",
  storageBucket: "alphabi-2ec3d.appspot.com",
  messagingSenderId: "253065173648",
  appId: "1:253065173648:web:e6193ecfbbe20c336e1615",
  measurementId: "G-W8F8KJHXMJ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
