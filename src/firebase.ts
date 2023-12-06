import { initializeApp } from "firebase/app";

const FIREBASE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyCuVbMWY_quGhXSK6dJsiwa4mqB4BN1HKI",

  authDomain: "turbohitch.firebaseapp.com",

  projectId: "turbohitch",

  storageBucket: "turbohitch.appspot.com",

  messagingSenderId: "929804219826",

  appId: "1:929804219826:web:147e9e315c9cd59d70e0ab",

  measurementId: "G-K2EPQ17WMP"

};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 
