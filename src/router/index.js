import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import HomeView1 from "@/views/HomeView1.vue";
import HomeView2 from "@/views/HomeView2.vue";
import LayoutView from "@/layout/index.vue";
const routes = [
  {
    path: "/",
    component: LayoutView,
    children: [
      {
        path: "home",
        component: HomeView,
      },
      {
        path: "home1",
        component: HomeView1,
      },
      {
        path: "home2",
        component: HomeView2,
      },
    ],
  },
  {
    path: "/login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
