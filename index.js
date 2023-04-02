// Import the functions you need from the SDKs you need
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
 
function register() {
    const email = document.getElementById('email2').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const password = document.getElementById('password2').value;


    if (validateField(firstName) == false || validateField(lastName) == false ){
        alert("One or more field is wrong!")
        return
    }

    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
        const user = userCredential.user;
        var user_data = {
            email : email,
            last_name : lastName,
            first_name : firstName,
            last_login : Date.now()
        }

        set(ref(database, 'users/' + user.uid), user_data)

        alert("user created!")

    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
    })
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('passwd').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        const user = userCredential.user

        var user_data = {
            last_login : Date.now()
        }

        set(ref(database, 'users/' +user.uid), user_data)


        window.location.href = "./main.html";
    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
        alert("does not exist")
    })
}

function validatePassword(password) {
    if (password < 6){
        return false
    } else {
        return true
    }
}

function validateField(field) {
    if (field == null) {
        return false
    } 
    if (field.length <= 0){
        return false
    } else {
        return true
    }
}

const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', function() {
  var overlay = document.getElementById("wrap");
  if (overlay.style.display === "block") {
        overlay.style.display = "none";
      } else {
        overlay.style.display = "block";
      }
});

const loginButton = document.getElementById("lgn_btn")
loginButton.addEventListener('click', function(){
    login();
})

const registerButton = document.getElementById("rgn_btn")
registerButton.addEventListener('click', function(){
    register();
})

