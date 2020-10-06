import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtbt8N_VmmWA-uuPliSGYcZpnBtiltrU4",
  authDomain: "test-e-commerce-b752a.firebaseapp.com",
  databaseURL: "https://test-e-commerce-b752a.firebaseio.com",
  projectId: "test-e-commerce-b752a",
  storageBucket: "test-e-commerce-b752a.appspot.com",
  messagingSenderId: "196112010323",
  appId: "1:196112010323:web:1b5ad9aaee4634becc0aa6",
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
