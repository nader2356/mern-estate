// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs4et5BVrcKmSAO19Ol_lmPv0u_zci7M4",
  authDomain: "full-stack-food-delivery.firebaseapp.com",
  projectId: "full-stack-food-delivery",
  storageBucket: "full-stack-food-delivery.appspot.com",
  messagingSenderId: "830328083639",
  appId: "1:830328083639:web:8a344541ddc27efcffe932",
  measurementId: "G-WERPD0TY7W"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
