import { createWebHashHistory, createRouter } from "vue-router";
import Start from '../views/Start.vue'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;