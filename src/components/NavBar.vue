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
      <button>Log out</button>
    </div>
    <!-- For logged out users -->
    <div>
      <router-link to="/login">Log in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </nav>
</template>
