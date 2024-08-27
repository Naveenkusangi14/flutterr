
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage ,ref } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyD9Y2d7TWcZaVeZ48X1wikdJEQsRfpTzJA",
    authDomain: "realtime-chat-app-e4d70.firebaseapp.com",
    projectId: "realtime-chat-app-e4d70",
    storageBucket: "realtime-chat-app-e4d70.appspot.com",
    messagingSenderId: "648338135713",
    appId: "1:648338135713:web:bddb3236ba270afea76ee0",
    measurementId: "G-BGTV2WD911"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);