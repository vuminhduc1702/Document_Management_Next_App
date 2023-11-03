// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8WPBNlOeGtddj-JqZ8ZTdfhq0DqtOzA8",
  authDomain: "frontend-exercise-74955.firebaseapp.com",
  databaseURL: "https://frontend-exercise-74955-default-rtdb.firebaseio.com",
  projectId: "frontend-exercise-74955",
  storageBucket: "frontend-exercise-74955.appspot.com",
  messagingSenderId: "120256079593",
  appId: "1:120256079593:web:846511c19e9d49696b7278",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
