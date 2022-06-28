import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component:  () => import("@/views/Login.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/websocket",
    name: "WebSocket",
    component:  () => import("@/components/webSocket/WebSocket.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;