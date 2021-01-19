import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANPRG81kQKwQQGsdEQRxTorFOKgcCjaKs",
    authDomain: "screenshotapp-18605.firebaseapp.com",
    projectId: "screenshotapp-18605",
    storageBucket: "screenshotapp-18605.appspot.com",
    messagingSenderId: "163225411645",
    appId: "1:163225411645:web:4a7294094f26ca3de48a54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth;
const db = firebase.firestore();
const storage = firebase.storage();

export { provider, auth, db, storage };