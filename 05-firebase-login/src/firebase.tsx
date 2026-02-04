import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

interface FirebaseConfing  {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string
}

const firebaseConfig: FirebaseConfing = {
  apiKey: "AIzaSyAtf2dO4A-TSabz2Ghnn8oPd2MPOe-3Ehw",
  authDomain: "login-f0637.firebaseapp.com",
  projectId: "login-f0637",
  storageBucket: "login-f0637.firebasestorage.app",
  messagingSenderId: "1093879013545",
  appId: "1:1093879013545:web:30258a1e3d7f1ca9f809b8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
