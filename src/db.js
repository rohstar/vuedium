import Firebase from 'firebase'
import firebaseConfig from '../config/firebase';

const firebaseApp = Firebase.initializeApp(firebaseConfig)
export var db = firebaseApp.database()
export var auth = firebaseApp.auth()
