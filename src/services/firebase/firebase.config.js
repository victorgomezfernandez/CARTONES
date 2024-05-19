// firebase.config.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDdhhSUaUndGu0VvmMcwZ0EzKceFqO6_54",
  authDomain: "cartones-9f0dc.firebaseapp.com",
  databaseURL: "https://cartones-9f0dc-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "cartones-9f0dc.appspot.com",
  projectId: "cartones-9f0dc",
  messagingSenderId: "612356591495",
  appId: "1:612356591495:web:f3b646f876e543ea4e0d22"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export default {
  db,
  storage,
};