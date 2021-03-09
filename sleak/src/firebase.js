import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlSBF2R03oQApJ5aazgVQanDp01oM_j_8",
  authDomain: "sleak-1acdd.firebaseapp.com",
  projectId: "sleak-1acdd",
  storageBucket: "sleak-1acdd.appspot.com",
  messagingSenderId: "219272970695",
  appId: "1:219272970695:web:f8184c8741226d566059e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
