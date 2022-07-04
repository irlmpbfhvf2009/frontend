import { createWebHashHistory, createRouter } from "vue-router";
import AppIntro from '../views/AppIntro.vue'
const routes = [
  {
    path: '/',
    name: 'appIntro',
    component: AppIntro
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;