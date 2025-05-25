import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// our web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDblEA5-FZItJ-X8uoszpyOs-auAwfsGh8",
  authDomain: "finmate-fed3e.firebaseapp.com",
  projectId: "finmate-fed3e",
  storageBucket: "finmate-fed3e.firebasestorage.app",
  messagingSenderId: "203353026641",
  appId: "1:203353026641:web:7eba8b8d37ebbf04358870"
};


// initializing Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };