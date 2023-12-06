import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChO9gWcIS_WCTEWxH7jzAVPxkH4SQVCaM",
  authDomain: "fir-c8875.firebaseapp.com",
  projectId: "fir-c8875",
  storageBucket: "fir-c8875.appspot.com",
  messagingSenderId: "299054458573",
  appId: "1:299054458573:web:18a7fe88adaa1d8bcf6b84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const timestamp = serverTimestamp();
