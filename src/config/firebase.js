import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC3Z1jn0Lyt4R0DWE9AQfDcqRRMigu9V0",
  authDomain: "tiktok---jornada-b88fd.firebaseapp.com",
  projectId: "tiktok---jornada-b88fd",
  storageBucket: "tiktok---jornada-b88fd.appspot.com",
  messagingSenderId: "359229160363",
  appId: "1:359229160363:web:7998cfd8c9ad99896170ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;