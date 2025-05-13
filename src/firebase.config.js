// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWhVlTzZb9kEldhwtzDo8p_3MrC6f0saY",
  authDomain: "new-travel-ghuru.firebaseapp.com",
  projectId: "new-travel-ghuru",
  storageBucket: "new-travel-ghuru.firebasestorage.app",
  messagingSenderId: "865153349218",
  appId: "1:865153349218:web:8f20095bbc9e945d59c33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app