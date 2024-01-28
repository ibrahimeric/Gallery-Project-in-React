// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBop18hk3Z5dguQ4c7_o61QYK7_scZrajU",
  authDomain: "galeryapp-89f8b.firebaseapp.com",
  projectId: "galeryapp-89f8b",
  storageBucket: "galeryapp-89f8b.appspot.com",
  messagingSenderId: "298614001159",
  appId: "1:298614001159:web:0f3614c3185a360ae764a2",
  measurementId: "G-PBQ7GY15X3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);