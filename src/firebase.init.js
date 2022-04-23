/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; */
// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL4GcwcANneMa4-UaLa1dRl7kR6Sw9O10",
  authDomain: "node-mongodb-in-car-service.firebaseapp.com",
  projectId: "node-mongodb-in-car-service",
  storageBucket: "node-mongodb-in-car-service.appspot.com",
  messagingSenderId: "928301665762",
  appId: "1:928301665762:web:423fe432712ee4061efdbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
export default auth;
