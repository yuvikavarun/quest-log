import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgrvEfUjEZ7dY6UC_1cWwmpWsU2xG1rkM",
  authDomain: "quest-log-app-f6a59.firebaseapp.com",
  projectId: "quest-log-app-f6a59",
  storageBucket: "quest-log-app-f6a59.firebasestorage.app",
  messagingSenderId: "1040765317918",
  appId: "1:1040765317918:web:49d73cad17912d4b960f0f",
  measurementId: "G-HSXZXLPQ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services we need
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign-in function
export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
