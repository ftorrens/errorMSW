import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/sass/app.scss';
import 'prismjs/themes/prism-tomorrow.min.css'

import axios from 'axios'

// Start Mockup Service Worker
import { worker } from "./mocks/browser"
/*if (process.env.NODE_ENV === 'development') {
    worker.start({
        quiet: true,
        onUnhandledRequest: 'bypass',
    });
}*/

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$axios = axios;

app.mount('#app')


