// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
 
  apiKey: "AIzaSyC1SM6UMsjp5GgdNsHjEzeRvID8LdmeEY8",
  authDomain: "next-fire3.firebaseapp.com",
  projectId: "next-fire3",
  storageBucket: "next-fire3.appspot.com",
  messagingSenderId: "351689395813",
  appId: "1:351689395813:web:c2e4b31c5c410d9ac1808c"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

export const provider =  new GoogleAuthProvider()