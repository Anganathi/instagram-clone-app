import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEX6v6fWBK4ryxbF-HMEScf7Gyl4YAr78",
  authDomain: "instagram-clone-app-fcf76.firebaseapp.com",
  databaseURL: "https://instagram-clone-app-fcf76-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-app-fcf76",
  storageBucket: "instagram-clone-app-fcf76.appspot.com",
  messagingSenderId: "409800051885",
  appId: "1:409800051885:web:0ea0de5fc5ed03e7b70a24",
  measurementId: "G-7Y39VTDCKB",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
