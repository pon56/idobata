// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

  const  firebaseConfig = {
    apiKey: "AIzaSyBeSyNS6mm31hDwenn-1vfTn7kvAuV6etk",
    authDomain: "idobata-4ca18.firebaseapp.com",
    projectId: "idobata-4ca18",
    storageBucket: "idobata-4ca18.appspot.com",
    messagingSenderId: "621649145195",
    appId: "1:621649145195:web:1f14deaf8b9adcfe7bf02e",
    measurementId: "G-Y3N2TMZGXG"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) =>{
      messageRef.push({name, text})
  }