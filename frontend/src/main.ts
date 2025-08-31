import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Import Tailwind CSS
import './styles/tailwind.css'
import './styles/utilities.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
