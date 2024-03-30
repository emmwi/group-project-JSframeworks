import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import '../src/scss/custom.scss'
import './style.css'

import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
createApp(App).use(pinia).use(router).mount('#app')
