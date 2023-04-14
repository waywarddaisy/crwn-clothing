import { initializeApp} from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider } from 'firebase/auth';

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