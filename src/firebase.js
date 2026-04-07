import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAATsqnRPZz7yBZ2ZIe_h3nSczEPmLgCPY",
  authDomain: "kp-devcell-8e05e.firebaseapp.com",
  projectId: "kp-devcell-8e05e",
  storageBucket: "kp-devcell-8e05e.appspot.com", // ✅ fixed
  messagingSenderId: "706138022501",
  appId: "1:706138022501:web:0cd652193d4597c93bdc8c",
  measurementId: "G-GQ1M8GV4PX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);