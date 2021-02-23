import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBBDaoOBCmCTv_hQ4a5xOuZO14zp6QYBEk",
    authDomain: "netflix-clone-733ce.firebaseapp.com",
    projectId: "netflix-clone-733ce",
    storageBucket: "netflix-clone-733ce.appspot.com",
    messagingSenderId: "875221024218",
    appId: "1:875221024218:web:ca6a1c49f6c44a850354e3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db