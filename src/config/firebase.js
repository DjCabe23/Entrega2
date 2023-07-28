
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkmCQzUWieWvb8N1mNFASbx2Bs7dZ2hdM",
  authDomain: "entregareact-d6a82.firebaseapp.com",
  projectId: "entregareact-d6a82",
  storageBucket: "entregareact-d6a82.appspot.com",
  messagingSenderId: "679256662484",
  appId: "1:679256662484:web:22cfd7aef54aba53663641",
  measurementId: "G-SWGK9NXZJX"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);