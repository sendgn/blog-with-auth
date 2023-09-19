<template>
  <form @submit.prevent="handleSubmit">
    <h3>Log in</h3>

    <label for="email-login">Email:</label>
    <input
      id="email-login"
      type="email"
      name="email"
      v-model="email"
      required
    >

    <label for="password-login">Password:</label>
    <input
      id="password-login"
      type="password" 
      name="password" 
      v-model="password"
      required
    >

    <button>Log in</button>
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
    };

    return { handleSubmit, email, password };
  }
};
</script>
