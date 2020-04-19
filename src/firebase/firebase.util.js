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
  measurementId: "G-CVV76DMG04",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collections) => {
    accumulator[collections.title.toLowerCase()] = collections;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
