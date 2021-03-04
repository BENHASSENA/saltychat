import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBdpO3gBcQzwrD6wUSz_XhtTZiGpbu_624",
    authDomain: "saltychat-da8ed.firebaseapp.com",
    projectId: "saltychat-da8ed",
    storageBucket: "saltychat-da8ed.appspot.com",
    messagingSenderId: "390608025868",
    appId: "1:390608025868:web:8ea2bef7e93184f655f129"
};

firebase.initializeApp(config);

export default firebase;
export const auth = firebase.auth;
export const db = firebase.firestore();