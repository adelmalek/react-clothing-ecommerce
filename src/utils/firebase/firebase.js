import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBvZ84rZ40oq9orkS0p2ozvuU2BkIH0U4",
    authDomain: "clothing-ecommerce-db-aefac.firebaseapp.com",
    projectId: "clothing-ecommerce-db-aefac",
    storageBucket: "clothing-ecommerce-db-aefac.appspot.com",
    messagingSenderId: "812256269466",
    appId: "1:812256269466:web:4c8ec2bfa21e907112fb23"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
}