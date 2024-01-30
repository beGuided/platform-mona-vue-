import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
//import "./assets/scss/style.scss"
import "./assets/css/style.css"
// import './assets/js/off-canvas.js';
// import "./assets/js/hoverable-collapse.js"
// import "./assets/js/misc.js"



const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')

