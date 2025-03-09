import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Prompts from '../views/Prompts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/prompts',
      name: 'Prompts',
      component: Prompts,
    },
  ],
})

export default router
