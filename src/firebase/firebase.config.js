// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAPSaa5Z8riKIIvbmQK0iFOC9os2MPAIo",
    authDomain: "fake-news-46e73.firebaseapp.com",
    projectId: "fake-news-46e73",
    storageBucket: "fake-news-46e73.appspot.com",
    messagingSenderId: "738712995596",
    appId: "1:738712995596:web:c7c382d1d367ffe6e42b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;