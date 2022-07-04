import { createWebHashHistory, createRouter } from "vue-router";
import AppIntro from '../views/AppIntro.vue'
import Square from '../views/Square.vue'
const routes = [
  {
    path: '/',
    name: 'appIntro',
    component: AppIntro
  },
  {
    path: '/square',
    name: 'square',
    component: Square
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;