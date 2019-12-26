const firebase = require('firebase/app'); 
require("firebase/firestore");
require("firebase/storage");
require("firebase/auth");

firebase.initializeApp({
  apiKey: 'AIzaSyArq7L5gIfHSwP21QBoHceRDPYU3YI-MXY',
  authDomain: 'chadali.firebaseapp.com',
  storageBucket: "chadali.appspot.com",
  projectId: 'chadali'
}); 

let db = firebase.firestore();
let storage = firebase.storage();
let auth = firebase.auth();

export {
  db, 
  storage,
  auth
}
