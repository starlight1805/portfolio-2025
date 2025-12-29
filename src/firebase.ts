import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_Amlax-7zAU2Yq24F1aOTKDbF1d3CXnM",
  authDomain: "vivekvarkala-portfolio.firebaseapp.com",
  projectId: "vivekvarkala-portfolio",
  storageBucket: "vivekvarkala-portfolio.firebasestorage.app",
  messagingSenderId: "651889600654",
  appId: "1:651889600654:web:0490c0fa1cada4a65f81df"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
