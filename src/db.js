import Firebase from 'firebase'
import firebaseConfig from '../config/firebase';

const firebaseApp = Firebase.initializeApp(firebaseConfig)
export default firebaseApp
