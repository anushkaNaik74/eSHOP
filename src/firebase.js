import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKe2nhW-q3iKVwk4clPSdTP85QqcCT1vU",
  authDomain: "eshop-453ff.firebaseapp.com",
  projectId: "eshop-453ff",
  storageBucket: "eshop-453ff.appspot.com",
  messagingSenderId: "624739106861",
  appId: "1:624739106861:web:3fa3c2690b72776f3178a4",
  measurementId: "G-R4RRCMHK0G"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
// ​​const auth = getAuth(app);
// ​​const db = getFirestore(app);

export { auth };