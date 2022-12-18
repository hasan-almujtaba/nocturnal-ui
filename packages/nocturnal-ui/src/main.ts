import { createApp } from 'vue'
import App from './app.vue'
import NocturnalUI from './index'
import './style.css'

const app = createApp(App)

app.use(NocturnalUI)
app.mount('#app')
