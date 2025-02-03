// Import Firebase dependencies
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config (replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyD2qNgaIld-ZKIKxX84xzKpU0YTmsAoM8I",
  authDomain: "beyondchat-41281.firebaseapp.com",
  projectId: "beyondchat-41281",
  storageBucket: "beyondchat-41281.firebasestorage.app",
  messagingSenderId: "899013516193",
  appId: "1:899013516193:web:276228015d92e22550c9e0",
  measurementId: "G-G0ZHE6YNXM"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase auth instance
export const auth = getAuth(app);
