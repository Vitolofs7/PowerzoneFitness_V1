// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKGvEPH1dS2ayS-oiT4EkO8qLMYJF9Joo",
  authDomain: "powerzone-2407a.firebaseapp.com",
  databaseURL: "https://powerzone-2407a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "powerzone-2407a",
  storageBucket: "powerzone-2407a.appspot.com",
  messagingSenderId: "242476831897",
  appId: "1:242476831897:web:2f25c3599b8a6cf1ef9408",
  measurementId: "G-1B6PDSKT0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;