import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/Home.vue'
import ExperienceView from '../views/pages/Experience.vue'
import ProjectsView from '../views/pages/Projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experiences',
      name: 'experiences',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: ExperienceView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
