// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey.toString(),
  authDomain: import.meta.env.VITE_apiKey.toString(),
  projectId: import.meta.env.VITE_projectId.toString(),
  storageBucket: import.meta.env.VITE_storageBucket.toString(),
  messagingSenderId: import.meta.env.VITE_messagingSenderId.toString(),
  appId: import.meta.env.VITE_appId.toString(),
  measurementId: import.meta.env.VITE_measurementId.toString()
};
console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);