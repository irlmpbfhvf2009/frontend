import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component:  () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component:  () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/helloWorld",
    name: "helloWorld",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/websocket",
    name: "WebSocket",
    component:  () => import("@/views/WebSocket.vue"),
  },
  {
    path: "/aaa",
    name: "aaa",
    component:  () => import("@/views/aaa.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;