import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCmlvGh9Qi6DM0Jnmed1RdwQgKykGM5Fr0',
  authDomain: 'neflix-clone-2.firebaseapp.com',
  projectId: 'neflix-clone-2',
  storageBucket: 'neflix-clone-2.appspot.com',
  messagingSenderId: '610766335707',
  appId: '1:610766335707:web:6f1f0a9ffa52386db0a6fe',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
