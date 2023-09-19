import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Global styles
import './assets/main.css';

// Import store
import store from './store/index';

createApp(App).use(router).use(store).mount('#app');
