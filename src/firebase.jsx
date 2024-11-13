// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcBrMJBmHSEt549MVTm-U6lAtT3-OF57Q",
  authDomain: "clone-bfe4f.firebaseapp.com",
  projectId: "clone-bfe4f",
  storageBucket: "clone-bfe4f.appspot.com",
  messagingSenderId: "915395110986",
  appId: "1:915395110986:web:cf1880ab7f5cf672e01eb3",
  measurementId: "G-9EQWQL50RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);