import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuQhkrPn-TMgqYoOJYWHuVLpqpA6cq2m8",
  authDomain: "task-react-fb-435bb.firebaseapp.com",
  projectId: "task-react-fb-435bb",
  storageBucket: "task-react-fb-435bb.appspot.com",
  messagingSenderId: "580752223530",
  appId: "1:580752223530:web:e4a9858351a5913e810253",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
