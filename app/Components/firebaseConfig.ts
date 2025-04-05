// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCI1izlklkGedqGk1_9KdRTA3EKC2Yyr3g",

  authDomain: "obligatoriskopgave2024.firebaseapp.com",

  projectId: "obligatoriskopgave2024",

  storageBucket: "obligatoriskopgave2024.firebasestorage.app",

  messagingSenderId: "338181213010",

  appId: "1:338181213010:web:a151358f2074160e5c488b",

  measurementId: "G-Y6TW8HBTYL",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
