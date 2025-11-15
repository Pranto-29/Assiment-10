// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk27df0sqdTx34tCkCoqWR55-Oo7GdZz4",
  authDomain: "fribase-project-1.firebaseapp.com",
  projectId: "fribase-project-1",
  storageBucket: "fribase-project-1.firebasestorage.app",
  messagingSenderId: "671123077399",
  appId: "1:671123077399:web:6ace7c17e95ea406511f52"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)