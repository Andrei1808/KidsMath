import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAwbkm1EGT7UYIJqoDnzyvSCBJIyGSlfNY",
  authDomain: "commercial-store-d6dda.firebaseapp.com",
  databaseURL: "https://commercial-store-d6dda-default-rtdb.firebaseio.com",
  projectId: "commercial-store-d6dda",
  storageBucket: "commercial-store-d6dda.appspot.com",
  messagingSenderId: "769490072063",
  appId: "1:769490072063:web:40d66948de3dba775177ca",
};

firebase.initializeApp(firebaseConfig);



export default {firebase};