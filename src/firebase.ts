import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh3RkHXVCvIKzFVQovbdMbRXksjND-JV8",
  authDomain: "zain-sofas.firebaseapp.com",
  projectId: "zain-sofas",
  storageBucket: "zain-sofas.firebasestorage.app",
  messagingSenderId: "765729333093",
  appId: "1:765729333093:web:6a34ebaa5505646ed64b8c",
  measurementId: "G-JJ018Z2XF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
