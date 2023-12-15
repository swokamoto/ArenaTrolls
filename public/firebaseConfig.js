// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNsSgu75foPXFVGUqPveByREhL6ymf68I",
  authDomain: "arenatroll-91061.firebaseapp.com",
  projectId: "arenatroll-91061",
  storageBucket: "arenatroll-91061.appspot.com",
  messagingSenderId: "1088008893718",
  appId: "1:1088008893718:web:19c4b3d57762345b884c37",
  measurementId: "G-4EQDGZ3VWX"
};

// Wait for Firebase to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get Auth instance
  const auth = getAuth(app);

  // Create Google Auth provider
  const googleAuthProvider = new GoogleAuthProvider();

  // Event listener for a button click or any user interaction triggering the sign-in process
  const signInButton = document.getElementById('signInButton');
  signInButton.addEventListener('click', () => {
    // Create a Google authentication provider instance
    const provider = new GoogleAuthProvider();

    // Sign in with the Google provider using a popup
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in successfully
        const user = result.user;
        console.log('Signed in user:', user);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Sign-in error (${errorCode}): ${errorMessage}`);
      });
  });
});
