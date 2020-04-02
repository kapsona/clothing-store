import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2-kSTYscqWF4Lpp6I2iWF_aG4gdxcbXw",
  authDomain: "clothing-store-d76ad.firebaseapp.com",
  databaseURL: "https://clothing-store-d76ad.firebaseio.com",
  projectId: "clothing-store-d76ad",
  storageBucket: "clothing-store-d76ad.appspot.com",
  messagingSenderId: "701644088275",
  appId: "1:701644088275:web:ad8729c7f9d9e3527ec526",
  measurementId: "G-CVV76DMG04"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
