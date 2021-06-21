import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
 
const firebaseConfig = {
   apiKey: "AIzaSyAUMT4CiJZop8Ce6duLIJIEZsE274ESuU8",
   authDomain: "beyond-nature-co-95ab7.firebaseapp.com",
   projectId: "beyond-nature-co-95ab7",
   storageBucket: "beyond-nature-co-95ab7.appspot.com",
   messagingSenderId: "503605116956",
   appId: "1:503605116956:web:ae1461b62562564e085fd9",
   measurementId: "G-PKJPN95HJQ"
 };
 
 firebase.initializeApp(firebaseConfig);
 export default firebase;
