import  firebase from 'firebase/compat/app';
import {} from 'firebase/compat/auth';
import {} from 'firebase/compat/database';
import {} from 'firebase/compat/firestore';
import {} from 'firebase/compat/storage';
// export const firestore = firebase.firestore();
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsvWxs1iuk3Z78DZluu25fqLW0AZyPXjk",
    authDomain: "e-commerce-d3a78.firebaseapp.com",
    projectId: "e-commerce-d3a78",
    storageBucket: "e-commerce-d3a78.appspot.com",
    messagingSenderId: "997572405164",
    appId: "1:997572405164:web:aae0cca6ccfd74aeb2fc09",
    measurementId: "G-K6R3PD2W1F"
  };

  // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

// firebase.app;

  export {auth, db, storage}