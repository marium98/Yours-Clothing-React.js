import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAN4vdfXH7nVsKvhphXHeuhyWKnYqVH3gE",
    authDomain: "yours-db.firebaseapp.com",
    databaseURL: "https://yours-db.firebaseio.com",
    projectId: "yours-db",
    storageBucket: "yours-db.appspot.com",
    messagingSenderId: "606002082649",
    appId: "1:606002082649:web:971647bae4d4fe346b1248",
    measurementId: "G-3RJLY53PF7"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {
if(!userAuth) return;

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();
 
if(!snapShot.exists) {
    const { displayName , email} = userAuth;
    const createdAt = new Date(); //JS date function

    try {
        await userRef.set( {
        displayName,
        email,
        createdAt,
        ...additionalData  })
    } catch (error) {
        console.log('error creating user',error.message);
        
    }
}

return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;