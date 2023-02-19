import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFNpYL7cXf8cgQ0MlECZH9uvvjZ_gfEUE",
  authDomain: "kasa-6ccf4.firebaseapp.com",
  projectId: " kasa-6ccf4",
  storageBucket: "kasa-6ccf4.appspot.com",
  messagingSenderId: "93197253548",
  appId: "1:93197253548:web:dc20ccc07173f22695d809",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
