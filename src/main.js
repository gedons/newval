import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router,Vue3Lottie, { name: 'LottieAnimation' })
    .mount('#app')
