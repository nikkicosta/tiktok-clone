import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDjtfxaOT7vsdrhBj_OKkDJ0YeJqBbSBAU",
  authDomain: "tiktok-clone-jordev.firebaseapp.com",
  projectId: "tiktok-clone-jordev",
  storageBucket: "tiktok-clone-jordev.appspot.com",
  messagingSenderId: "400310319030",
  appId: "1:400310319030:web:46c90c18d28cb116747317",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;