import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyCuFFc8B3_oUtUPFTbm_UFMdpuySqTO28s",
    authDomain: "reels-clone-7c438.firebaseapp.com",
    projectId: "reels-clone-7c438",
    storageBucket: "reels-clone-7c438.appspot.com",
    messagingSenderId: "306564305853",
    appId: "1:306564305853:web:52ef3c42c1a81c71a9b8d4"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;