import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/auth/login.vue'
import signUp from '@/components/auth/signUp.vue'
import dashboard from  '@/components/dashboard/index.vue'
import overview from '@/components/dashboard/overview.vue'
import project from '@/components/dashboard/project.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Signup.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
    { 
      path: '/project',
      name: 'project',
      component: project
    }
  ]
})

export default router
