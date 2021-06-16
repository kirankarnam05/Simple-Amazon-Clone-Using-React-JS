import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ( {
        apiKey: "AIzaSyCn9E3b_zI9XSZ5HbnV3uG0-Hz0-hY98V0",
        authDomain: "fir-7dcef.firebaseapp.com",
        projectId: "fir-7dcef",
        storageBucket: "fir-7dcef.appspot.com",
        messagingSenderId: "101562249452",
        appId: "1:101562249452:web:e3353792b4e7f5fdd2b5c9",
        measurementId: "G-9L49WMNRF3"
  } );

 
const auth = firebase.auth();

export { auth };