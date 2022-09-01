import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { URL_API } from './configs/api'
import './index.css'

const app = createApp(App)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = URL_API

app.use(router)

app.mount('#app')
