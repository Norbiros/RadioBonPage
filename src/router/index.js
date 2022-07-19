import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AuditionView from '../views/AuditionView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
      path: '/login',
      name: 'login',
      component: AuditionView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView
    }
  ]
})

export default router
