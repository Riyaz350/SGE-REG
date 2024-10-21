import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTOkh9VTfPtV7aBdBM8_f17QDL8DUEFZg",
  authDomain: "sge-reg.firebaseapp.com",
  projectId: "sge-reg",
  storageBucket: "sge-reg.appspot.com",
  messagingSenderId: "967158956621",
  appId: "1:967158956621:web:81370596ea1cd726cb5204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;