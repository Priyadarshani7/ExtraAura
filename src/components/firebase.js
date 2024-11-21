// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCp2TqJoTRGJL9TEmsl2r2gseqSB5WtQ",
  authDomain: "extraaura-ac9ba.firebaseapp.com",
  projectId: "extraaura-ac9ba",
  storageBucket: "extraaura-ac9ba.firebasestorage.app",
  messagingSenderId: "549794701945",
  appId: "1:549794701945:web:ba4faecb54dd1833f1aaa8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
