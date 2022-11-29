import { createApp } from 'vue'
import App from './App.vue'
import NocturnalUI from 'nocturnal-ui'
import 'nocturnal-ui/style.css'
import './style.css'

const app = createApp(App)

app.use(NocturnalUI)
app.mount('#app')
