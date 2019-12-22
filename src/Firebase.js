const firebase = require('firebase/app'); 
require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyArq7L5gIfHSwP21QBoHceRDPYU3YI-MXY',
  authDomain: 'chadali.firebaseapp.com',
  projectId: 'chadali'
}); 

let db = firebase.firestore();

export default db; 
