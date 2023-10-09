import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmX0jajMddUGaQBX_tsLm_y7nKDY0XiIM",
  authDomain: "chat-3-4444c.firebaseapp.com",
  projectId: "chat-3-4444c",
  storageBucket: "chat-3-4444c.appspot.com",
  messagingSenderId: "872212710615",
  appId: "1:872212710615:web:16322083fefd3bdfe35c92",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
