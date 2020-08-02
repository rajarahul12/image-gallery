import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDTjqQ_CWl5VKHe2v889LRcYa-OD188EFg",
  authDomain: "image-gallery-react.firebaseapp.com",
  databaseURL: "https://image-gallery-react.firebaseio.com",
  projectId: "image-gallery-react",
  storageBucket: "image-gallery-react.appspot.com",
  messagingSenderId: "881344184147",
  appId: "1:881344184147:web:2632a71302d7f9059d6ba6",
  measurementId: "G-FKZBECCY29"
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };