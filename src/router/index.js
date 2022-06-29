import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component:  () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component:  () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/helloWorld",
    name: "HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/websocket",
    name: "WebSocket",
    component:  () => import("@/views/WebSocket.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;