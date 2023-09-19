import { createStore } from "vuex";

const store = createStore({
  state: {
    points: 0
  },
  mutations: {
    // Parameters:
    // -------------
    // 1) state object - current state at the point in time
    // that we call this mutation
    // -----------------------------
    // 2) payload - it's just extra data that we might pass into this function
    // that maybe is going to be the new value of the points
    // or some other piece of state
    // or it could be used to determine the new value of the points
    updatePoints(state, payload) {
      state.points = state.points + payload;
    }
  }
});

// Export store
export default store;
