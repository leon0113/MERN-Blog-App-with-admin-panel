
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-7d1a7.firebaseapp.com",
    projectId: "mern-blog-7d1a7",
    storageBucket: "mern-blog-7d1a7.appspot.com",
    messagingSenderId: "623805817577",
    appId: "1:623805817577:web:3feff7eb079661e4f2c678"
};

export const app = initializeApp(firebaseConfig);