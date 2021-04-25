import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZC97gCJGfhIss3ZOYEgwrtatPn6RfMhI",
  authDomain: "shoppingsite-5de8e.firebaseapp.com",
  projectId: "shoppingsite-5de8e",
  storageBucket: "shoppingsite-5de8e.appspot.com",
  messagingSenderId: "549617212920",
  appId: "1:549617212920:web:e5e615c16e89e27bc24a0d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth, db };
