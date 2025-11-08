import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3jnqa9Vrx3p4yXmxU9B_W-LULEm-sz-Q",
    authDomain: "everybonghwang.firebaseapp.com",
    projectId: "everybonghwang",
    storageBucket: "everybonghwang.firebasestorage.app",
    messagingSenderId: "423639740817",
    appId: "1:423639740817:web:0935a64ae2f92f0587ea30",
    measurementId: "G-076MT508QZ"

};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
