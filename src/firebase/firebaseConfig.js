import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCV8Sx9tDOcVgVbqurKB0iZYakVP5QZgjQ",
  authDomain: "digital-market-app.firebaseapp.com",
  projectId: "digital-market-app",
  storageBucket: "digital-market-app.appspot.com",
  messagingSenderId: "1072090957779",
  appId: "1:1072090957779:web:f43c48a8368eaa758a1126",
  measurementId: "G-DZZMGWKRLN"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore();

const auth = getAuth();

export {database, auth};