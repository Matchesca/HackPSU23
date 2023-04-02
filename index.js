// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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

const auth = getAuth(app);
const database = getDatabase(app);
 
function register() {
    email = document.getElementById('email');
    firstName = document.getElementById('fName');
    lastName = document.getElementById('lName');
    password = document.getElementById('passwd');

    if (validateField(firstName) == false || validateField(lastName) == false ){
        alert("One or more field is wrong!")
        return
    }

    auth.createUserWithEmailAndPassword(email, password)

    .then(function() {

        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            email : email,
            last_name : lastName,
            first_name : firstName,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)


        alert("user created!")

    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
    })
}

function login() {
    const email = document.getElementById('email');
    const password = document.getElementById('passwd');
    signInWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {

        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data).update(user_data)


        alert("user Logged In!")

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