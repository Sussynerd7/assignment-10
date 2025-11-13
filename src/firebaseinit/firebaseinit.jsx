// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyCCVEtWPYcQXNl-XdUAfcwzGgtbLzuj-CA",
//   authDomain: "cfs-assignment-10.firebaseapp.com",
//   projectId: "cfs-assignment-10",
//   storageBucket: "cfs-assignment-10.firebasestorage.app",
//   messagingSenderId: "197736328799",
//   appId: "1:197736328799:web:cd1de510279c80fd6075ea"
// };

// const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app)





import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
