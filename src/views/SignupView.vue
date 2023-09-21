<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email-signup">Email:</label>
    <input
      id="email-signup"
      type="email"
      name="email"
      v-model="email"
      required
    >

    <label for="password-signup">Password:</label>
    <input
      id="password-signup"
      type="password"
      name="password"
      v-model="password"
      required
    >

    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const store = useStore();

    const handleSubmit = () => {
      // Call the action, or 'dispatch the action' as it's known
      // this is our way of basically say - look I want you to run one of the actions
      store.dispatch('signup', { email: email.value, password: password.value });
    }

    return { handleSubmit, email, password };
  }
};
</script>
