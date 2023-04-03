import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import Menu from '../views/Menu.vue'
import aboutUs from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/LandingPage',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
    }
  ]
})

export default router
