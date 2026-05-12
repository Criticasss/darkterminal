import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  doc,
  getDocs,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

console.log("🔥 firebase.js cargando");

// 🔥 TU CONFIG (rellena con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyBtcweHquP0Lf6oyuZ45SQ3oJ4-IZbZYkc",
  authDomain: "dark-terminal.firebaseapp.com",
  projectId: "dark-terminal",
  storageBucket: "dark-terminal.firebasestorage.app",
  messagingSenderId: "808682896729",
  appId: "1:808682896729:web:b644e59aa13b59a4136048"
};

// 🔥 INICIALIZAR APP
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 EXPORT GLOBAL (IMPORTANTE)
window.firebaseDB = {

    db,

    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,

    deleteDoc,
    doc,
    getDocs,
    setDoc
};

console.log("🔥 FIREBASE LISTO");
