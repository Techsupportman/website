// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1FH3iBzIN7iBbDyJQSs4WVBueojPNG_s",
  authDomain: "backend-2e198.firebaseapp.com",
  databaseURL: "https://backend-2e198-default-rtdb.firebaseio.com",
  projectId: "backend-2e198",
  storageBucket: "backend-2e198.appspot.com",
  messagingSenderId: "456958419836",
  appId: "1:456958419836:web:af8a12b8d90c6e37a4faf9",
  measurementId: "G-LBDWK5T1M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);