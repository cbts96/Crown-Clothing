import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyA71JwlxOcraVojx5BjLT3fHUDT68t-ik0",
  authDomain: "crown-clothing-v3.firebaseapp.com",
  databaseURL: "https://crown-clothing-v3.firebaseio.com",
  projectId: "crown-clothing-v3",
  storageBucket: "crown-clothing-v3.appspot.com",
  messagingSenderId: "791966890169",
  appId: "1:791966890169:web:dec68759905c7886908368",
  measurementId: "G-8Z1TLNZ8LJ",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  
  const snapshot = await userRef.get();
 
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (error) {
      console.log("error creating error", error.message);
    }
  }
  return userRef;
};
export const addCollectionAndDocuments=async (collectionKey,objectToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  const batch=firestore.batch();
  objectToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef,obj)
  })
  return await batch.commit();
}
export const convertCollectionSnapshotToMap=collections=>{
  const tranformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();
    return{
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })
  return tranformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{})
}

export const getCurrentUser=()=>{
  return new Promise((resolve,reject)=>{
    const unsubscribe=auth.onAuthStateChanged(userAuth=>{
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
