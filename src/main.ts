import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import { createPinia } from 'pinia';
// import axios from 'axios';
const pinia = createPinia();
const app = createApp(App);
app.use(ElementPlus);
// eslint-disable-next-line
app.use(pinia as any);
app.mount('#app');
