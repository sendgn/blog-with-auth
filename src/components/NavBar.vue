<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- For all users -->
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <!-- For logged in users -->
    <div class="shift-down">
      <span>Logged in as...</span>
      <button @click="handleClick">Log out</button>
    </div>
    <!-- For logged out users -->
    <div>
      <router-link to="/login">Log in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    // const user = store.state.user;
    
    const handleClick = () => {
      store.dispatch('logout');
    }

    return { handleClick }
  }
}
</script>
