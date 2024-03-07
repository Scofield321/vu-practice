import { createApp } from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import VueApexCharts from "vue3-apexcharts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import NotFound from './views/NotFound.vue'
import BaseChart from './components/BaseChart.vue'


const app = createApp(App)
const router = createRouter({
    history : createWebHistory(),
    routes : 
    [
        { path : '/home' , component : HomePage },
        { path : '/login' , component : LoginPage },
        {path: '/:notFound(.*)', component: NotFound},
        {path: '/charts', component: BaseChart}
    ]
})
app.config.globalProperties.$axios = axios;
app.use(router);
app.use(ElementPlus)
app.use(VueApexCharts);
app.use(VueSweetalert2);
app.mount('#app')
