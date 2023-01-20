import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import commonJs from './assets/js/common'
//import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/all.scss";
//import 'bootstrap'
import * as bootstrap from 'bootstrap';

window.Toast = bootstrap.Toast;

const app = createApp(App)
for(let i in Icons){
    app.component(i,Icons[i])
}
app.use(router).use(ElementPlus,{locale});
app.config.globalProperties.$commonJs=commonJs
app.mount('#app')
