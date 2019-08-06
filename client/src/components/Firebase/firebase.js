import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAS-KUb567-NTUGK2UmDop3ZDUjsX3yK90",
  authDomain: "food-counter-8fd8d.firebaseapp.com",
  databaseURL: "https://food-counter-8fd8d.firebaseio.com",
  projectId: "food-counter-8fd8d",
  storageBucket: "",
  messagingSenderId: "300110753191",
  appId: "1:300110753191:web:011ef7aaf4115454"
};

class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
        
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);    
  }
  
  export default Firebase;