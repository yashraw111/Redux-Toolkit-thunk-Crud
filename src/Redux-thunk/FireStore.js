import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyBpO04PhyVfrXle38Y2Pw9sh-0qIKfrJik",
  authDomain: "fir-cd21f.firebaseapp.com",
  databaseURL: "https://fir-cd21f-default-rtdb.firebaseio.com",
  projectId: "fir-cd21f",
  storageBucket: "fir-cd21f.firebasestorage.app",
  messagingSenderId: "1005541435993",
  appId: "1:1005541435993:web:ed025daac2b72761a15f48",
  measurementId: "G-XQLSNJZ5EL"
};

const app = initializeApp(firebaseConfig);

const dbFire = getFirestore(app);

export const auth = getAuth(app)
export default dbFire
