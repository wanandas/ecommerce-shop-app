import  firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/auth';


const config = {
    apiKey: "AIzaSyAAgR-2hPEVB6-1ms3ip1-29a39ciEHzEo",
    authDomain: "crwn-db-96203.firebaseapp.com",
    databaseURL: "https://crwn-db-96203.firebaseio.com",
    projectId: "crwn-db-96203",
    storageBucket: "crwn-db-96203.appspot.com",
    messagingSenderId: "150968519599",
    appId: "1:150968519599:web:2c4cf3e6f96f44b9dffd5a",
    measurementId: "G-V5LDRTY9KM"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      })
    } catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;