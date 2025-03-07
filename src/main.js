import { createApp } from 'vue'
import router from './router'
import i18n from './i18n'
import './assets/css/fonts.css'
import App from './App.vue'

import products from '@/assets/data/products.js'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.provide('products', products)
app.mount('#app')
