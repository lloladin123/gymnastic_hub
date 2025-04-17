// app/services/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI1izlklkGedqGk1_9KdRTA3EKC2Yyr3g",
  authDomain: "obligatoriskopgave2024.firebaseapp.com",
  projectId: "obligatoriskopgave2024",
  storageBucket: "obligatoriskopgave2024.appspot.com",
  messagingSenderId: "338181213010",
  appId: "1:338181213010:web:a151358f2074160e5c488b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
