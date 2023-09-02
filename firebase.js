import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBitRLMdb0oslpPs4_I6WCYWh1LQox8Hsg",
  authDomain: "database-tdd-01.firebaseapp.com",
  projectId: "database-tdd-01",
  storageBucket: "database-tdd-01.appspot.com",
  messagingSenderId: "656594861754",
  appId: "1:656594861754:web:706d477ec9cb093bf20c83",
  measurementId: "G-9ML4WM11TH"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };
