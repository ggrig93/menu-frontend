import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from "axios";

/**
 * Configure axios
 */
axios.defaults.withCredentials = false;
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')