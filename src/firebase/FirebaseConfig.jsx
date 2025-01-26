// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHenJu0lBEj9X8sYFPZYDEgjKufUXm_SM",
  authDomain: "myeco-8f077.firebaseapp.com",
  projectId: "myeco-8f077",
  storageBucket: "myeco-8f077.firebasestorage.app",
  messagingSenderId: "832078348427",
  appId: "1:832078348427:web:42fe517d8a8655cf46148e",
  measurementId: "G-CRYNQ1EQMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }