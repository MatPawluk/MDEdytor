import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Najpierw czyścimy localStorage aby usunąć potencjalnie uszkodzone dane
localStorage.removeItem('markdown-documents');
localStorage.removeItem('active-document-id');
localStorage.removeItem('dark-mode');
localStorage.removeItem('sidebar-visible');
localStorage.removeItem('preview-visible');

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')