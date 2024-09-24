
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLDnFaKU54ArY72nfLiXzRYG4Fz-pNSZg",
  authDomain: "radiantbliss-46e35.firebaseapp.com",
  projectId: "radiantbliss-46e35",
  storageBucket: "radiantbliss-46e35.appspot.com",
  messagingSenderId: "824206641292",
  appId: "1:824206641292:web:8418ec9c55abf8e07753a9",
  measurementId: "G-D9FCKBY90Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, db, provider, storage, firebaseConfig };
