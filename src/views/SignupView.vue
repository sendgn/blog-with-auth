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

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      console.log(email.value, password.value);
    }

    return { handleSubmit, email, password };
  }
};
</script>
