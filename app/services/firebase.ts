// app/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "obligatoriskopgave2024.firebaseapp.com",
  projectId: "obligatoriskopgave2024",
  storageBucket: "obligatoriskopgave2024.appspot.com",
  messagingSenderId: "338181213010",
  appId: "1:338181213010:web:a151358f2074160e5c488b",
};

console.log("API KEY from env:", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
