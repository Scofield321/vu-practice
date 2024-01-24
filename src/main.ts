import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'


const app = createApp(App)
const router = createRouter({
    history : createWebHistory(),
    routes : 
    [
        { path : '/home' , component : HomePage },
        { path : '/login' , component : LoginPage }
    ]
})
app.use(router);
app.mount('#app')
