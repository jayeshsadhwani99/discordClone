import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBZ7kOa-bv2BnEn4SdNtNQyBbTrfLRPQv4",
    authDomain: "discord-clone-5072f.firebaseapp.com",
    projectId: "discord-clone-5072f",
    storageBucket: "discord-clone-5072f.appspot.com",
    messagingSenderId: "353645966901",
    appId: "1:353645966901:web:5ceb50211af693ebfca37c",
    measurementId: "G-993REYT7EW"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;