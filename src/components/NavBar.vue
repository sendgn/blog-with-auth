<template>
  <nav>
    <h1>Vuex Auth</h1>
    <template v-if="authIsReady">
      <!-- For all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- For logged in users -->
      <div v-if="user" class="shift-down">
        <span>Logged in as <b>{{ user.email }}</b></span>
        <button @click="handleClick">Log out</button>
      </div>
      <!-- For logged out users -->
      <div v-else>
        <router-link to="/login">Log in</router-link>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    // const user = store.state.user;
    
    const handleClick = () => {
      store.dispatch('logout');
    }

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady)
    }
  }
};
</script>
