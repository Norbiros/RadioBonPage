import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AuditionView from '../views/AuditionView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/audition',
      name: 'audition',
      component: AuditionView
    },
    {
      name: 'login',
      path: '/login',
      alias: '/register',
      component: LoginView
    },
    {
      name: 'admin',
      path: '/admin',
      component: AdminDashboardView
    },
    {
      path: '/:pathMatch(.*)*', // 404 page
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
