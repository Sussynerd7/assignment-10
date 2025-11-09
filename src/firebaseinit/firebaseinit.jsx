import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCVEtWPYcQXNl-XdUAfcwzGgtbLzuj-CA",
  authDomain: "cfs-assignment-10.firebaseapp.com",
  projectId: "cfs-assignment-10",
  storageBucket: "cfs-assignment-10.firebasestorage.app",
  messagingSenderId: "197736328799",
  appId: "1:197736328799:web:cd1de510279c80fd6075ea"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)

