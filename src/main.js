import './assets/main.css'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingBag)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')