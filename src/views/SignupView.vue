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
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value
        });
        // redirect user to the home page
        router.push('/');
      } catch (err) {
        error.value = err.mesage;
      }
    }

    return { handleSubmit, email, password, error };
  }
};
</script>
