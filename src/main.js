import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);
app.use(router);
app.use(Toaster);
app.mount('#app');