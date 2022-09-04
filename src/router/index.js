import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AuditionView from "../views/AuditionView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import LoginView from "../views/LoginView.vue";
import AdminDashboardView from "../views/admin/AdminDashboardView.vue";
import PostAudition from "../views/admin/PostAuditionView.vue";
import axios from "axios";

async function getData() {
  return (
    await axios.get(`${import.meta.env.VITE_API_URL}/isLoggedIn`, {
      withCredentials: true,
    })
  ).data;
}

const ifNotAuthenticated = async (to, from, next) => {
  if (!(await getData())) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = async (to, from, next) => {
  if (await getData()) {
    next();
    return;
  }
  next("/login");
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/audition",
      name: "audition",
      component: AuditionView,
    },
    {
      name: "login",
      path: "/login",
      alias: "/register",
      component: LoginView,
      beforeEnter: ifNotAuthenticated,
    },
    {
      name: "admin",
      path: "/admin",
      component: AdminDashboardView,
      beforeEnter: ifAuthenticated,
    },
    {
      name: "postAudition",
      path: "/admin/postAudition",
      component: PostAudition,
    },
    {
      path: "/:pathMatch(.*)*", // 404 page
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;
