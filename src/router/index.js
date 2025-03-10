import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Prompts from '../views/Prompts.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

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
    {
      path: '/posts',
      name: 'Blog',
      component: Posts,
    },
    {
      path: '/posts/:slug',
      name: 'Blog Post',
      component: Post,
    },
  ],
})

export default router
