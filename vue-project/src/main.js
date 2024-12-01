import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Toast from 'vue-toastification';
import router from './router'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.use(Toast)
app.use(router)
app.mount('#app')