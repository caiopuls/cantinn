import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxp3Y94Cl-ImYyD6glPl05DUGiIzEb8ow",
  authDomain: "appcantinn.firebaseapp.com",
  projectId: "appcantinn",
  storageBucket: "appcantinn.appspot.com",
  messagingSenderId: "835208191834",
  appId: "1:835208191834:web:c8effd2b82a13862b2dd63",
  measurementId: "G-9HP58F5Z9N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);