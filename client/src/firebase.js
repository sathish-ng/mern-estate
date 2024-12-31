// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRREBASE_API_KEY,
  authDomain: "mern-estate-f947a.firebaseapp.com",
  projectId: "mern-estate-f947a",
  storageBucket: "mern-estate-f947a.firebasestorage.app",
  messagingSenderId: "162105252921",
  appId: "1:162105252921:web:cadb87de0eaddf5fe2c1e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);