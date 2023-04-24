import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}from 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyAfiESrbaX-yBXp5-NPlw6-aye-5SITmB4",
  
    authDomain: "crwn-clothing-db-481cb.firebaseapp.com",
  
    projectId: "crwn-clothing-db-481cb",
  
    storageBucket: "crwn-clothing-db-481cb.appspot.com",
  
    messagingSenderId: "111668847347",
  
    appId: "1:111668847347:web:1dca944b97247056874d86"
  
  };
  

  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  export const db= getFirestore();

  export const createUserDocumentFromAuth = async (userAuth)=> {

    const userDocRef = doc(db, 'users', userAuth.uid);

      console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        } );
      }
      catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
    //if user data exists
    //if user data does not exist - create/set document from userauth in my collection, using userSnapshot
    //return userDocRef
  };
