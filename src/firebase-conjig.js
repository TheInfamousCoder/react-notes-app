import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAUSeyfj3HvP14eIkfHkdgwBnSio79w34",
  authDomain: "react-notes-app-91368.firebaseapp.com",
  projectId: "react-notes-app-91368",
  storageBucket: "react-notes-app-91368.appspot.com",
  messagingSenderId: "898771498848",
  appId: "1:898771498848:web:92d28483b9990557125005",
  measurementId: "G-RFB6B5VHD9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
