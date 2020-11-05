import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAJ407jwtQRKeheMaQX0BSG8Azy5SZ0Ojo",
  authDomain: "todoist-clone-ee75b.firebaseapp.com",
  databaseURL: "https://todoist-clone-ee75b.firebaseio.com",
  projectId: "todoist-clone-ee75b",
  storageBucket: "todoist-clone-ee75b.appspot.com",
  messagingSenderId: "106078100904",
  appId: "1:106078100904:web:5258908f8c1646d8cad19d"
});

export { firebaseConfig as firebase };