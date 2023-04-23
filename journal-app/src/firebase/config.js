import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD2CzvFZyPKL4X24aOlaRzcW2EVcNvCJYI",
  authDomain: "react-course-77045.firebaseapp.com",
  projectId: "react-course-77045",
  storageBucket: "react-course-77045.appspot.com",
  messagingSenderId: "708511446017",
  appId: "1:708511446017:web:68f3772227fcca2864fc00"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);