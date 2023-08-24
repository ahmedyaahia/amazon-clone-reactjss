import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY836xl2p2gyJBHHRKabdSVCSFi-1vReo",
    authDomain: "clone-bbaae.firebaseapp.com",
    projectId: "clone-bbaae",
    storageBucket: "clone-bbaae.appspot.com",
    messagingSenderId: "62605288385",
    appId: "1:62605288385:web:3df90870e99fc2f65a4540",
    measurementId: "G-MJWS2H274S"
  };
  // Initialize Firebase



   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();

  export { db, auth };