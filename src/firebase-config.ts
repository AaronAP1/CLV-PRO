// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBthbNlaq-2_0TeAc_e4fhPIzsdx6LkkGg",
  authDomain: "clv-back.firebaseapp.com",
  projectId: "clv-back",
  storageBucket: "clv-back.appspot.com",
  messagingSenderId: "779393555611",
  appId: "1:779393555611:web:c5597e38c512681f1aba3e",
  measurementId: "G-ZTCLX96SP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
