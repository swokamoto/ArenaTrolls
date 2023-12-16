// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNsSgu75foPXFVGUqPveByREhL6ymf68I",
  authDomain: "arenatroll-91061.firebaseapp.com",
  projectId: "arenatroll-91061",
  storageBucket: "arenatroll-91061.appspot.com",
  messagingSenderId: "1088008893718",
  appId: "1:1088008893718:web:19c4b3d57762345b884c37",
  measurementId: "G-4EQDGZ3VWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });