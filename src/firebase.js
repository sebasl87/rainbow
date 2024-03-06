import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const functions = getFunctions(app);
const dbFirestore = getFirestore(app);
const storage = getStorage(app);

// if (!import.meta.env.NODE_ENV || import.meta.env.NODE_ENV === 'development') {
//   self.FIREBASE_APPCHECK_DEBUG_TOKEN =
//     import.meta.env.VITE_FIREBASE_APPCHECK_DEBUG_TOKEN;
// }

export default app;

export { auth, database, functions, dbFirestore, storage };


