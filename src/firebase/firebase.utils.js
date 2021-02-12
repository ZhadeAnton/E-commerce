import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGFeooJRE4KIKbIURDPG6NfrgMhL1_aqo",
  authDomain: "crwn-db-ba8de.firebaseapp.com",
  projectId: "crwn-db-ba8de",
  storageBucket: "crwn-db-ba8de.appspot.com",
  messagingSenderId: "480965593870",
  appId: "1:480965593870:web:25230210f6adc06d08255f",
  measurementId: "G-JWP27Q7QKW"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const usersnapShot = await userRef.get()

  if (!usersnapShot.exists) {
    try {
      await userRef.set({
        id: usersnapShot.id,
        displayName: userAuth.displayName,
        email: userAuth.email,
        createAt: new Date(),
        ...additionalData
      })
    } catch (error) {
      console.error(error)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)