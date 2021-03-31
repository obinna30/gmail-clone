import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuDWrriTgvUBKJYabXzQdhjC_VkONXnqM",
  authDomain: "fir-6e192.firebaseapp.com",
  projectId: "fir-6e192",
  storageBucket: "fir-6e192.appspot.com",
  messagingSenderId: "90335916053",
  appId: "1:90335916053:web:be30ed77c1303599ef9e1c",
  measurementId: "G-K0Y8ZC3QVB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
