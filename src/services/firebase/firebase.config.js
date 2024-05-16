// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdhhSUaUndGu0VvmMcwZ0EzKceFqO6_54",
  authDomain: "cartones-9f0dc.firebaseapp.com",
  databaseURL : "https://cartones-9f0dc-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "cartones-9f0dc",
  storageBucket: "cartones-9f0dc.appspot.com",
  messagingSenderId: "612356591495",
  appId: "1:612356591495:web:f3b646f876e543ea4e0d22"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;