// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmrWiarJyftL9RZYAvYTyNJQTnsY81ppI",
  authDomain: "cartones-62edd.firebaseapp.com",
  databaseURL: "https://cartones-62edd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cartones-62edd",
  storageBucket: "cartones-62edd.appspot.com",
  messagingSenderId: "628907442821",
  appId: "1:628907442821:web:14caf05e947a2ad94e5fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;