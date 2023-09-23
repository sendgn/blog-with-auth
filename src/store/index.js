import { createStore } from 'vuex';

// Firebase imports
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    }
  },
  actions: {
    async signup(context, { email, password }) {
      console.log('signup action');

      // async code
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      if (resp) {
        context.commit('setUser', resp.user);
      } else {
        throw new Error('could not complete signup');
      }
    },
    async login(context, { email, password }) {
      console.log('login action');

      // async code
      const resp = await signInWithEmailAndPassword(auth, email, password);
      if (resp) {
        context.commit('setUser', resp.user);
      } else {
        throw new Error('could not complete login');
      }
    },
    async logout(context) {
      console.log('logout action');

      await signOut(auth);
      context.commit('setUser', null);
    }
  }
});

// This callback is going to fire
// whenever there's a change in authentication state,
// including once initially after we've made
// the first initial connection to firebase auth
const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  // We need to unsubscribe from changes, because if we don't
  // then every time the user auth changes then it's gonna fire this function,
  // and we don't wanna do that over and over again,
  // we just wanna do it ONCE to begin with
  unsub();
});

// Export store
export default store;
