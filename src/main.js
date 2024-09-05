import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Убедитесь, что store существует

const app = createApp(App);

app.use(router); // Используем маршрутизатор
app.use(store);  // Используем Vuex

app.mount('#app'); // Монтируем приложение на элемент с id="app"