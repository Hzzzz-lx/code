import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import HomeView1 from "@/views/HomeView1.vue";
import HomeView2 from "@/views/HomeView2.vue";
import CanKu from "@/views/CanKu.vue"
import LayoutView from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: LayoutView,
    children: [
      {
        path: "/",
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
      {
        path: "canku",
        component: CanKu,
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

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem("userToken");

  if (to.path === "/login" && isLogged) {
    // 如果用户已经登录，重定向到主页
    next("/");
  } else if (to.path !== "/login" && !isLogged) {
    // 如果用户试图访问非登录页面且未登录，则重定向到登录页面
    next("/login");
  } else {
    next();
  }
});

export default router;
