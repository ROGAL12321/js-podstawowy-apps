// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfIaK_fy5dsoRLwXPoSUBV2ASJt_59gsY",
  authDomain: "javascript-chat123.firebaseapp.com",
  projectId: "javascript-chat123",
  storageBucket: "javascript-chat123.appspot.com",
  messagingSenderId: "572206788695",
  appId: "1:572206788695:web:8f6544f41b57df2cdcb312",
  databaseURL: 'https://javascript-chat123-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);