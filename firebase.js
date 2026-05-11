import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtcweHquP0Lf6oyuZ45SQ3oJ4-IZbZYkc",
  authDomain: "dark-terminal.firebaseapp.com",
  projectId: "dark-terminal",
  storageBucket: "dark-terminal.firebasestorage.app",
  messagingSenderId: "808682896729",
  appId: "1:808682896729:web:b644e59aa13b59a4136048"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// exportamos para script.js
window.firebaseDB = {
  db,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
};
