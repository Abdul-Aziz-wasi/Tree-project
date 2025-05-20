
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDEPxVY4R7sTbXbYxvpqN0Krs27pFihFbQ",
  authDomain: "my-mango-projects.firebaseapp.com",
  projectId: "my-mango-projects",
  storageBucket: "my-mango-projects.firebasestorage.app",
  messagingSenderId: "1059501751889",
  appId: "1:1059501751889:web:41e874de91c1ff34fd4270"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)