import { createStore } from 'vuex';

// Firebase imports
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
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

// Export store
export default store;
