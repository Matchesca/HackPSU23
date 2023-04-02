// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBakKdftmAQP6HmVZK2zYDGt_GIVVXUj5Y",
  authDomain: "bartab-7be79.firebaseapp.com",
  projectId: "bartab-7be79",
  storageBucket: "bartab-7be79.appspot.com",
  messagingSenderId: "608866379265",
  appId: "1:608866379265:web:a688d7b6d4baabc36c8200",
  measurementId: "G-76L09V8DKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);