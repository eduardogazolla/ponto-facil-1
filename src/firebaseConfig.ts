import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh4ppLt0Vo8iEfgRTfm7lvg8Lf5Mo9trc",
  authDomain: "controle-ponto-92cff.firebaseapp.com",
  projectId: "controle-ponto-92cff",
  storageBucket: "controle-ponto-92cff.firebasestorage.app",
  messagingSenderId: "253561761542",
  appId: "1:253561761542:web:631358ef9fde0a6f9af887",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
