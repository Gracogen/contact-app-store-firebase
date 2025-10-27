// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz77MQmU9kC6zBUYLT8Rms2a57wbLCF-k",
  authDomain: "contact-app-react-a987c.firebaseapp.com",
  projectId: "contact-app-react-a987c",
  storageBucket: "contact-app-react-a987c.appspot.com",
  messagingSenderId: "542473608921",
  appId: "1:542473608921:web:1ee628d7df4c147a8ee8c8",
  measurementId: "G-BSFWPTDZRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);
