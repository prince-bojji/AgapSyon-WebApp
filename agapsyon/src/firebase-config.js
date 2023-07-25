import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBnFc_ez2WO_yVLssyz_XUhoojPiU30EAs',
  authDomain: 'agapsyon-cbcf9.firebaseapp.com',
  projectId: 'agapsyon-cbcf9',
  storageBucket: 'agapsyon-cbcf9.appspot.com',
  messagingSenderId: '90312017017',
  appId: '1:90312017017:web:cf9aeb6b0b5aa16976c0a8',
  measurementId: 'G-MZ0W5E1D0M',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


