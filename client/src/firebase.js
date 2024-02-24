// import process from 'process'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a6fcf.firebaseapp.com",
  projectId: "mern-blog-a6fcf",
  storageBucket: "mern-blog-a6fcf.appspot.com",
  messagingSenderId: "238698353032",
  appId: "1:238698353032:web:625c68bc4abf1869062a3d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
