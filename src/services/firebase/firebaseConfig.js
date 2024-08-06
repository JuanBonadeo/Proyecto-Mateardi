import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANj_2sT4q0mc_VVGtwNQmeEyZ6wzQvY6g",
  authDomain: "mateardi-d8f70.firebaseapp.com",
  projectId: "mateardi-d8f70",
  storageBucket: "mateardi-d8f70.appspot.com",
  messagingSenderId: "139686941428",
  appId: "1:139686941428:web:185dbb90189e9d216f04a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};
export const storage = getStorage(app);
//Initialize Firestore
export const db = getFirestore(app)