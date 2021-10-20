// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA3_Izf6X_9-MIsGBRK8omgWDDdsjpHUpo",
	authDomain: "insta-clone-67802.firebaseapp.com",
	projectId: "insta-clone-67802",
	storageBucket: "insta-clone-67802.appspot.com",
	messagingSenderId: "590266337362",
	appId: "1:590266337362:web:3ca5b015a8598c7d26378b",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
