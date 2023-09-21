import { createStore } from "vuex";

// Firebase imports
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword
} from 'firebase/auth';

const store = createStore({
  state: {
    user: null
  },
  // Code inside a mutation must be synchronous
  // https://vuex.vuejs.org/guide/mutations.html#mutations-must-be-synchronous
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log('user state changed:', state.user);
    }
  },
  // Actions are just functions,
  // and those functions can contain any buisness logic
  // and asynchronous code like authentication requests,
  // and then once that request is complete it can commit a mutation
  // to actually change the state
  // ---------------------------------
  // actions can commit many mutations
  actions: {
    // Parameters:
    // 1) context - context object that has a commit() method
    // which we use to commit a mutation once we've done the asynchronous code
    // 2) payload - any data we're sending to the action
    async signup(context, { email, password }) {
      console.log('signup action');

      // async code
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      if (resp) {
        context.commit('setUser', resp.user);
      } else {
        throw new Error('could not complete signup');
      }
    }
  }
});

// Export store
export default store;
