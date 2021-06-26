import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCNRw01V6Tx33jmU2wu5M3BzLWHizslji0",
  authDomain: "newsletter-82ba1.firebaseapp.com",
  databaseURL: "https://newsletter-82ba1-default-rtdb.firebaseio.com",
  projectId: "newsletter-82ba1",
  storageBucket: "newsletter-82ba1.appspot.com",
  messagingSenderId: "246167765760",
  appId: "1:246167765760:web:3af8f466806e5cfc22a9e5",
  measurementId: "G-KGCRRMRZCB"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();