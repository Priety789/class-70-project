import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCQmxexjIpHTZmzvoidRtkfShyCuHtkPlc",
    authDomain: "class70-579f7.firebaseapp.com",
    databaseURL: "https://class70-579f7-default-rtdb.firebaseio.com",
    projectId: "class70-579f7",
    storageBucket: "class70-579f7.appspot.com",
    messagingSenderId: "610302382095",
    appId: "1:610302382095:web:2eb393a92da03e31e2937a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()