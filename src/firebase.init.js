// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTlSIS17fZyyLENvgt2kDv-MVvHrbPtxA",
    authDomain: "hotel-website-d1edf.firebaseapp.com",
    projectId: "hotel-website-d1edf",
    storageBucket: "hotel-website-d1edf.appspot.com",
    messagingSenderId: "692101825649",
    appId: "1:692101825649:web:7094029c2066fb2972c7d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;