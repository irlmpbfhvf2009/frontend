import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component:  () => import("@/views/Login.vue"),
  },
  {
    path: "/index.html",
    name: "Login",
    component:  () => import("@/views/Login.vue"),
  },

  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;