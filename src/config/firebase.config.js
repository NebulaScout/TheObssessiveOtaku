import { initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsvWxs1iuk3Z78DZluu25fqLW0AZyPXjk",
  authDomain: "e-commerce-d3a78.firebaseapp.com",
  databaseURL: "https://e-commerce-d3a78-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "e-commerce-d3a78",
  storageBucket: "e-commerce-d3a78.appspot.com",
  messagingSenderId: "997572405164",
  appId: "1:997572405164:web:aae0cca6ccfd74aeb2fc09",
  measurementId: "G-K6R3PD2W1F"
};

  

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  const db = getFirestore(app);
  const createAcc = createUserWithEmailAndPassword();
  const storage = getStorage(app);

  //update firestore settings
  // db.settings({ timestampsInSnapshots: true})


  export {auth, createAcc, db, storage}