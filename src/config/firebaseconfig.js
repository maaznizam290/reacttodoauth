// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJF7Rt9TnYyQd_sIkR-XHPq6uIGTwUYkU",
  authDomain: "mywebapp-d3055.firebaseapp.com",
  projectId: "mywebapp-d3055",
  storageBucket: "mywebapp-d3055.appspot.com",
  messagingSenderId: "215327381259",
  appId: "1:215327381259:web:1940ae239162345ef2f40e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
console.log(app);