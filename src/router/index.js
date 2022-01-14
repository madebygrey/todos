import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../views/Todos.vue'

const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
