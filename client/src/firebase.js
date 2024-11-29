// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c54ce.firebaseapp.com",
  projectId: "mern-estate-c54ce",
  storageBucket: "mern-estate-c54ce.appspot.com",
  messagingSenderId: "243086452972",
  appId: "1:243086452972:web:b87cf6200c1ad39299ddc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);