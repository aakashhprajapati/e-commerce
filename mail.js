
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "http://www.gstatic.com/firebase/10.7.2/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC09hqd8MEo-FAyWaRhglVk4zMQ3NWTsdU",
  authDomain: "contactform-926d0.firebaseapp.com",
  databaseURL: "https://contactform-926d0-default-rtdb.firebaseio.com",
  projectId: "contactform-926d0",
  storageBucket: "contactform-926d0.appspot.com",
  messagingSenderId: "234646333464",
  appId: "1:234646333464:web:d5e4c700107a99c1f97b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  

  // reference your data base 

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event) {
    event.preventDefault()
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Acoount")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
