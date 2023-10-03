import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBHFWGmUFphiNsXV6K2nqFo-8mY6DYMuA",
  authDomain: "chat-2-e04b3.firebaseapp.com",
  projectId: "chat-2-e04b3",
  storageBucket: "chat-2-e04b3.appspot.com",
  messagingSenderId: "941719692633",
  appId: "1:941719692633:web:0724c17bdc395039ea5848",
  measurementId: "G-PM6V1J5W5T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
