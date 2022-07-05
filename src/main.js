import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store'

const app = createApp(App)
app.use(Antd);
app.use(store);
app.use(router);
app.use(VueAxios,axios);
app.mount('#app')