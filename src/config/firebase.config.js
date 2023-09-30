import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

  firebase.InitialializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  exports (auth, db, storage);