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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;