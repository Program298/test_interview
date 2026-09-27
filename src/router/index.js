import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '@/view/LoginView.vue'
import MainView from '@/layouts/MainLayout.vue'  
import SystemsView from '@/view/SystemsView.vue'
import DashboardView from '@/view/DashboardView.vue'

const router =  createRouter({
  history: createWebHistory(),
  routes: [
  
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
        path: '/main',
        name: 'Main',
        component: MainView,
  children: [
        {
          path: '',
          redirect: { name: 'Systems' }
        },
        {
          path: 'systems',
          name: 'Systems',
          component: SystemsView
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: DashboardView
        }
      ]
    }
  ]
})

export default router