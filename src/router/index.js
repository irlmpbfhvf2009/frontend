import { createWebHashHistory, createRouter } from "vue-router";
import Start from '../views/Start.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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