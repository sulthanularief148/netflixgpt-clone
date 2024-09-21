// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk0OXhtzUBl4SpqQDlP0MfTnfxkT4kpKk",
    authDomain: "netflixgpt-cee91.firebaseapp.com",
    projectId: "netflixgpt-cee91",
    storageBucket: "netflixgpt-cee91.appspot.com",
    messagingSenderId: "101998122750",
    appId: "1:101998122750:web:a3e4c297d3ce1f2bd6b7af",
    measurementId: "G-87E7K7Y0RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();