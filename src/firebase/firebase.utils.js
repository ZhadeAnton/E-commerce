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

  const userSnapShot = await userRef.get()

  if (!userSnapShot.exists) {
    try {
      await userRef.set({
        id: userSnapShot.id,
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    console.log(newDocRef)
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const converCollectionSnapshotToMap = collections => {
  const collectionItems = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return collectionItems.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)