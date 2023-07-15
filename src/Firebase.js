// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBRGmmyM6ZXRuJratSOWUwzhD5LnHsVL3c",
    authDomain: "chat-app-2640a.firebaseapp.com",
    projectId: "chat-app-2640a",
    storageBucket: "chat-app-2640a.appspot.com",
    messagingSenderId: "193407023101",
    appId: "1:193407023101:web:a15c703ed7057246ab8b94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();