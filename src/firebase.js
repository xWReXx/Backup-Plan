import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyD2K1AWIGWQ9EnhMFmWay4W4jbtgDUaBQQ',
  authDomain: 'backupplan.firebaseapp.com',
  databaseURL: 'https://backupplan.firebaseio.com',
  projectId: 'backupplan',
  storageBucket: 'backupplan.appspot.com',
  messagingSenderId: '1026506180814'
}
const FirebaseApp = firebase.initializeApp(config)
// export firebase database
export default FirebaseApp.firestore()
