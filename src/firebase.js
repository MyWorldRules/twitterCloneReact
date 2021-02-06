import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqDOjJhnGjfLwURsVWaNHLo8RsHkrJpTQ",
    authDomain: "taruntwitterclone.firebaseapp.com",
    projectId: "taruntwitterclone",
    storageBucket: "taruntwitterclone.appspot.com",
    messagingSenderId: "722802449228",
    appId: "1:722802449228:web:bab53994724f52d21acde9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


  export default db;
  /*
  npm i firebase



  */