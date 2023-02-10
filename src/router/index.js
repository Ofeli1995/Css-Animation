import { createRouter, createWebHistory } from "vue-router";
import NavManu from "../views/NavManu.vue";

const routes = [
  {
    path: "/",
    name: "NavManu",
    component: NavManu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
