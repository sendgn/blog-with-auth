import { initializeApp } from 'firebase/app';
// Used to initialize authentication service on a frontend
// so we can connect to the backend and use the auth service
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB6qlysTYBqmPAV2uTLe1szXViwLPQMEo",
  authDomain: "vuex-4-fb-auth-a32b2.firebaseapp.com",
  projectId: "vuex-4-fb-auth-a32b2",
  storageBucket: "vuex-4-fb-auth-a32b2.appspot.com",
  messagingSenderId: "262145878399",
  appId: "1:262145878399:web:335f781d9ab52a23df124a"
};

// Init firebase
initializeApp(firebaseConfig);

// Init firebase auth
const auth = getAuth();

export { auth };
