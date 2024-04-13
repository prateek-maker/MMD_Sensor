import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/auth/login.vue'
import signUp from '@/components/auth/signUp.vue'
import dashboard from  '@/components/pages/index.vue'
import overview from '@/components/pages/overview.vue'
import project from '@/components/pages/project.vue'
import sensor from '@/components/pages/device.vue'
import details from '@/components/pages/details.vue'
import graph from '@/components/pages/graph.vue'
import user from '@/components/pages/user.vue'

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
    },
    { 
      path: '/sensor',
      name: 'sensor',
      component: sensor
    },
    { 
      path: '/details',
      name: 'details',
      component: details
    },
    { 
      path: '/graph',
      name: 'graph',
      component: graph
    },
    { 
      path: '/users',
      name: 'users',
      component: user
    }
  ]
})

export default router
