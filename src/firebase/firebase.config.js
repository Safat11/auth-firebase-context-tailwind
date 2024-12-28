// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0RsAzv-8rAmMM5q0UkV5sx1Rqz7s9UDk",
  authDomain: "auth-firebase-context-ta-d9f33.firebaseapp.com",
  projectId: "auth-firebase-context-ta-d9f33",
  storageBucket: "auth-firebase-context-ta-d9f33.firebasestorage.app",
  messagingSenderId: "160700749658",
  appId: "1:160700749658:web:f5266e31154f5affc3c563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;