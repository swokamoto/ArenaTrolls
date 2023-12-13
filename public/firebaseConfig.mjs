// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);