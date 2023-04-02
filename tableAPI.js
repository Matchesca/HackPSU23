import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase, ref, set, update, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBakKdftmAQP6HmVZK2zYDGt_GIVVXUj5Y",
  authDomain: "bartab-7be79.firebaseapp.com",
  projectId: "bartab-7be79",
  storageBucket: "bartab-7be79.appspot.com",
  messagingSenderId: "608866379265",
  appId: "1:608866379265:web:a688d7b6d4baabc36c8200",
  measurementId: "G-76L09V8DKG",
  databaseURL: "https://bartab-7be79-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);
 