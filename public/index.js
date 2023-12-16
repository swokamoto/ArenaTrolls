import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyCNsSgu75foPXFVGUqPveByREhL6ymf68I",
    authDomain: "arenatroll-91061.firebaseapp.com",
    projectId: "arenatroll-91061",
    storageBucket: "arenatroll-91061.appspot.com",
    messagingSenderId: "1088008893718",
    appId: "1:1088008893718:web:19c4b3d57762345b884c37",
    measurementId: "G-4EQDGZ3VWX"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Create Google Auth provider
const googleAuthProvider = new GoogleAuthProvider();

// Now you can use auth and authentication providers

// Example: Sign in with Google
const signInWithGoogle = () => {
  auth.signInWithPopup(googleAuthProvider)
    .then((result) => {
      const user = result.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
};

// Call your functions or perform other actions as needed
signInWithGoogle();